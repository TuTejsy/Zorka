import { SHA512, enc, lib } from 'crypto-js';
import { CryptoDB, TransactionsDB } from 'appDatabase';


async function openEncryptedDB(secretPhrase: string) {
    const encodedSecretPhrase = enc.Utf8.parse(secretPhrase);
    const privateKey = SHA512(encodedSecretPhrase);

    try {
        await CryptoDB.open();
        await TransactionsDB.open();
    } catch(err) {
        console.error(err);
    }
}

export default openEncryptedDB;
