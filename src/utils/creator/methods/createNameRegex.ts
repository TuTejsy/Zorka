import { escapeRegExp } from 'lodash';

function createNameRegex(name: string, extension?: string) {
    const escapedName = escapeRegExp(name);
    if (extension) {
        const escapedExtension = escapeRegExp(extension);

        return new RegExp(`^${escapedName}( \\([0-9]+\\))?(\\.${escapedExtension})$`);
    }

    return new RegExp(`^${escapedName}( \\([0-9]+\\))?$`);
}

export default createNameRegex;
