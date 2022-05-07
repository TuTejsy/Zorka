import { generatePassphrase, generateRandomBytes, generatePrivateAndPublicKeys } from './methods';

class Generator {
    static passphrase = generatePassphrase;
    static randomBytes = generateRandomBytes;
    static privateAndPublicKeys = generatePrivateAndPublicKeys;
}

export default Generator;
