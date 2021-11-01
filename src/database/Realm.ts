import Realm, { Configuration, Results } from 'realm';
import { ZorkaNative } from 'zorka-native';

class RealmDB<ObjectType> {
    protected instance: Realm;
    private realmPath: string;

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private realmConfig: Configuration,
        public objectName: string,
    ) {}

    schema = () => this.instance.schema;

    open = (encryptionKey: Buffer) => {
        this.realmPath = global.isIos
            ? `${ZorkaNative.groupContainerURL}Realm-${this.objectName}.realm`
            : `Realm-${this.objectName}.realm`;

        if (__DEV__) {
            if (global.isAndroid) {
                console.log(`${this.objectName}DB path: ${Realm.defaultPath}`);
            } else {
                console.log(`${this.objectName}DB path: ${this.realmPath}`);
            }
        }

        return Realm.open({
            ...this.realmConfig,
            path: this.realmPath,
            encryptionKey,
        })
            .then((realmInstance) => {
                this.instance = realmInstance;
                return realmInstance;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    fetch = (input: Array<string>): [Array<ObjectType>, Array<string>] => {
        const results: Array<ObjectType> = [];
        const notFoundObjects: Array<string> = [];

        input.forEach((id) => {
            const object = this.object(id);

            if (object) {
                results.push(object);
            } else {
                notFoundObjects.push(id);
            }
        });

        return [results, notFoundObjects];
    };

    object = (id: string) => {
        if (id) {
            return this.instance.objectForPrimaryKey<ObjectType>(
                this.objectName,
                id,
            );
        } else {
            return null;
        }
    };

    // eslint-disable-next-line arrow-parens
    subObject = <SubObjectType>(subObjectName: string, id: string) => {
        if (id) {
            return this.instance.objectForPrimaryKey<SubObjectType>(
                subObjectName,
                id,
            );
        } else {
            return null;
        }
    };

    subObjects = <SubObjectType>(subObjectsName: string) =>
        this.instance.objects<SubObjectType>(subObjectsName);

    objects = () => this.instance.objects<ObjectType>(this.objectName);

    upsert = (input: Array<ObjectType> | ObjectType) =>
        new Promise((res, rej) => {
            const upserted: Array<ObjectType> = [];
            const notUpserted: Array<{ object: ObjectType; err: Error }> = [];

            this.performAfterTransactionComplete(() => {
                this.instance.write(() => {
                    if (Array.isArray(input)) {
                        input.forEach((object) => {
                            try {
                                const created =
                                    this.instance.create<ObjectType>(
                                        this.objectName,
                                        object,
                                        true,
                                    );
                                upserted.push(created);
                            } catch(err) {
                                notUpserted.push({ object, err });
                            }
                        });
                    } else {
                        try {
                            const created = this.instance.create<ObjectType>(
                                this.objectName,
                                input,
                                true,
                            );
                            upserted.push(created);
                        } catch(err) {
                            notUpserted.push({ object: input, err });
                        }
                    }

                    res([upserted, notUpserted]);
                });
            });
        });

    delete = (
        input:
        | Array<ObjectType | string>
        | Results<ObjectType>
        | ObjectType
        | string,
    ) => {
        if (!input) {
            return;
        }

        this.performAfterTransactionComplete(() => {
            this.instance.write(() => {
                if (Array.isArray(input)) {
                    input.forEach((data) => {
                        const object =
                            typeof data === 'string' ? this.object(data) : data;

                        if (object) {
                            this.instance.delete(object);
                        }
                    });
                } else {
                    const object =
                        typeof input === 'string' ? this.object(input) : input;

                    if (object) {
                        this.instance.delete(object);
                    }
                }
            });
        });
    };

    transaction = (callback: (instance: Realm, objectName: string) => void) => {
        this.performAfterTransactionComplete(() => {
            this.instance.write(() => {
                callback(this.instance, this.objectName);
            });
        });
    };

    modify = (callback: () => void) => {
        this.performAfterTransactionComplete(() => {
            try {
                this.instance.write(callback);
            } catch(err) {
                console.log(err);
            }
        });
    };

    update = (ids: Array<string>, updater: (object: ObjectType) => void) => {
        const [foundObjects, notFoundObjects] = this.fetch(ids);

        this.modify(() => {
            foundObjects.forEach(object => updater(object));
        });
    };

    updateSelected = (
        filter: string,
        updater: (object: ObjectType) => void,
    ) => {
        const foundObjects = this.objects().filtered(filter);

        // Array is needed, because if you iterate over the "live" object (results)
        // -> the size of results may change during the forEach cycle (during update)
        const foundObjectsArray = foundObjects.map(obj => obj);

        this.modify(() => {
            foundObjectsArray.forEach(object => updater(object));
        });
    };

    resetDatabase = () => {
        if (this.instance && !this.instance.isClosed) {
            this.realmConfig.deleteCache(this.instance);
        }
        this.close();
        Realm.deleteFile({
            ...this.realmConfig,
            path: this.realmPath,
        });
        this.open();
    };

    dropDatabase = () => {
        this.realmConfig.deleteCache(this.instance);

        this.performAfterTransactionComplete(() => {
            this.instance.write(() => {
                this.instance.deleteAll();
            });
        });
    };

    close = () => {
        if (this.instance && !this.instance.isClosed) {
            this.instance.close();
        }
    };

    performAfterTransactionComplete = (callback: () => void) => {
        if (this.instance.isInTransaction) {
            setTimeout(this.performAfterTransactionComplete, 50, callback);
        } else {
            callback();
        }
    };
}

export default RealmDB;
