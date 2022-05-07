import { SHA512, enc } from 'crypto-js';

interface PrivateAndPublicKeysPayload {
    publicKey: string,
    privateKey: string,
}

function generatePrivateAndPublicKeys(secretPhrase: string): PrivateAndPublicKeysPayload {
    const privateKey = SHA512(secretPhrase).toString(enc.Hex);
    const publicKey = SHA512(privateKey).toString(enc.Hex);

    return {
        publicKey,
        privateKey,
    };
}

export default generatePrivateAndPublicKeys;
