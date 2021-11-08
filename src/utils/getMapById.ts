const mapById = {
    toObject: mapIdToObject,
    toExists: mapIdToExists,
    toKeyValue: mapIdToKeyValue,
    toKeysValue: mapIdToKeysValue,
    toDefaultValue: mapIdToDefaultValue,
};

export default mapById;

function mapIdToExists<T, K extends keyof T>(
    collection: IterableCollection<T>,
    key?: K,
) {
    const mapById: MapById<boolean> = {};

    if (key) {
        for (let i = 0; i < collection.length; i++) {
            const object = collection[i];
            const objectId = object[key];

            if (typeof objectId === 'string') {
                mapById[objectId] = true;
            } else {
                const err = new Error(`
                    getMapById error: "value[key] of the object must be a string". 
                    Type ${typeof objectId} is Provided.
                    Value: ${objectId}.
                `);

                console.error(err);
            }
        }
    } else {
        for (let i = 0; i < collection.length; i++) {
            const id = collection[i];

            if (typeof id === 'string') {
                mapById[id] = true;
            } else {
                const err = new Error(`
                    getMapById error: "each value of an array must be a string (id)". 
                    Type ${typeof id} is Provided on index: ${i}.
                    Value: ${id}.
                `);

                console.error(err);
            }
        }
    }

    return mapById;
}


function mapIdToObject<T, K extends keyof T>(
    collection: IterableCollection<T>,
    key: K,
) {
    const mapById: MapById<T> = {};

    for (let i = 0; i < collection.length; i++) {
        const object = collection[i];
        const objectId = object[key];

        if (typeof objectId === 'string') {
            mapById[objectId] = object;
        } else {
            const err = new Error(`
                getMapById error: "value[key] of the object must be a string". 
                Type ${typeof objectId} is Provided.
                Value: ${objectId}.
            `);

            console.error(err);
        }
    }

    return mapById;
}

function mapIdToKeyValue<T, K extends keyof T, VK extends keyof T>(
    collection: IterableCollection<T>,
    key: K,
    valueKey: VK,
) {
    const mapById: MapById<T[VK]> = {};

    for (let i = 0; i < collection.length; i++) {
        const object = collection[i];
        const objectId = object[key];

        if (typeof objectId === 'string') {
            const valueToAssign = object[valueKey];
            mapById[objectId] = valueToAssign;
        } else {
            const err = new Error(`
                getMapById error: "value[key] of the object must be a string". 
                Type ${typeof objectId} is Provided.
                Value: ${objectId}.
            `);

            console.error(err);
        }
    }

    return mapById;
}

function mapIdToKeysValue<T, K extends keyof T, VK extends keyof T>(
    collection: IterableCollection<T>,
    key: K,
    valueKeys: Array<VK>,
) {
    const mapById: MapById<Record<VK, T>> = {};

    for (let i = 0; i < collection.length; i++) {
        const object = collection[i];
        const objectId = object[key];

        if (typeof objectId === 'string') {
            const valueToAssign = <Record<VK, T>>valueKeys.reduce((acc, valueKey) => ({
                ...acc,
                [valueKey]: object[valueKey],
            }), {});

            mapById[objectId] = valueToAssign;
        } else {
            const err = new Error(`
                getMapById error: "value[key] of the object must be a string". 
                Type ${typeof objectId} is Provided.
                Value: ${objectId}.
            `);

            console.error(err);
        }
    }

    return mapById;
}

function mapIdToDefaultValue<T, K extends keyof T, V>(
    collection: IterableCollection<T>,
    key: K,
    defaultValue: V,
) {
    const mapById: MapById<V> = {};

    for (let i = 0; i < collection.length; i++) {
        const object = collection[i];
        const objectId = object[key];

        if (typeof objectId === 'string') {
            mapById[objectId] = { ...defaultValue };
        } else {
            const err = new Error(`
                getMapById error: "value[key] of the object must be a string". 
                Type ${typeof objectId} is Provided.
                Value: ${objectId}.
            `);

            console.error(err);
        }
    }

    return mapById;
}
