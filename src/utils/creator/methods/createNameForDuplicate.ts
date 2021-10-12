function createNameForDuplicate(
    itemName: string,
    sameNames: Array<string>,
    file: boolean = false,
    originalName?: string) {
    let nameToSend = itemName;

    if (sameNames.length) {
        const duplicatesExist = sameNames.some(name => /( \([0-9]+\))/g.test(name));
        if (duplicatesExist) {
            let maxIndex = 0;
            const indexes: Array<number> = [];

            sameNames.forEach((name) => {
                const duplicatesIndexes = name.match(/( \([0-9]+\))/g);

                if (duplicatesIndexes) {
                    const withParenthesise = duplicatesIndexes.pop();
                    const withoutParenthesise = withParenthesise?.slice(2, -1);
                    const index = Number(withoutParenthesise);
                    indexes.push(index);

                    if (index > maxIndex) {
                        maxIndex = index;
                    }
                }
            });

            if (indexes.length === sameNames.length) {
                return originalName || itemName;
            }
            indexes.sort((a, b) => a - b);

            for (let i = 0; i < maxIndex; i++) {
                if (indexes[i] > i + 2) {
                    return `${itemName} (${i + 2})`;
                }
            }

            if (file) {
                nameToSend = itemName.replace(/\./g, ` (${maxIndex + 1}).`);
            } else {
                nameToSend = `${itemName} (${maxIndex + 1})`;
            }
        } else {
            if (file) {
                nameToSend = itemName.replace(/\./g, ' (2).');
            } else {
                nameToSend = `${itemName} (2)`;
            }
        }
    }

    return nameToSend || originalName;
}

export default createNameForDuplicate;
