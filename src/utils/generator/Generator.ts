import { generatePassphrase, generateRandomBytes } from './methods';

class Generator {
    static passphrase = generatePassphrase;
    static randomBytes = generateRandomBytes;
}

export default Generator;
