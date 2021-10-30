import { randomBytes } from 'react-native-randombytes';

// asynchronous API
// uses iOS-side SecRandomCopyBytes
export default (amountOfBytes: number) =>
    new Promise<Buffer>((res, rej) => {
        randomBytes(amountOfBytes, (err: Error, bytes: Buffer) => {
            if (err) {
                rej(err);
            } else {
                res(bytes);
            }
        });
    });
