Object.defineProperty(Object.prototype, 'cloneZRK', {
    value() {
        const result = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const key in this) {
            const keyValue = this[key];

            const isObject = keyValue?.constructor?.name === 'object';
            const isArray = Array.isArray(keyValue);
            const isRealmObject = keyValue?.isRealmObject && keyValue.isRealmObject();
            const isRealmList = keyValue?.isRealmList && keyValue.isRealmList();

            if (isObject || isRealmObject) {
                result[key] = keyValue.cloneZRK();
            } else if (isRealmList || isArray) {
                result[key] = keyValue.map((listValue) => {
                    const isObject = listValue?.constructor?.name === 'object';
                    const isRealmObject = listValue?.isRealmObject && listValue.isRealmObject();

                    if (isObject || isRealmObject) {
                        return listValue.cloneZRK();
                    } else {
                        return listValue;
                    }
                });
            } else {
                result[key] = keyValue;
            }
        }

        return result;
    },
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(Object.prototype, 'isRealmObject', {
    value() {
        return this?.constructor?.name === 'RealmObject';
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'isRealmList', {
    value() {
        const isList = this?.constructor?.name === 'List';
        const isListInRelease = (typeof this.length === 'number') && (this?.constructor?.name === '');

        return isList || isListInRelease;
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'isArrayBuffer', {
    value() {
        return this?.constructor?.name === 'ArrayBuffer';
    },
    enumerable: false
});

Object.defineProperty(Object.prototype, 'isReduxSagaTask', {
    value() {
        if (this === null || this === undefined) {
            return false;
        } else {
            return this['@@redux-saga/TASK'];
        }
    },
    enumerable: false
});
