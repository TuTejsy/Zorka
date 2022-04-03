import { Generator } from '../generator';

/** Class representing operations with Random numbers using cryptographically secure random */
class Random extends Object {
    /** Returns value from 0 up to upperLimit, not including value of upperLimit and not bigger than 0x7fffffff */
    static async getRandomNumberUpTo(upperLimit: number): Promise<number> {
        const INT32_MAXIMUM_VALUE = 0x7fffffff;

        if (upperLimit >= INT32_MAXIMUM_VALUE) {
            throw new Error(
                `${upperLimit} bigger than maximum allowed number ${INT32_MAXIMUM_VALUE}`,
            );
        }

        const safeLoops = Math.floor(INT32_MAXIMUM_VALUE / upperLimit);
        let randomInt32 = 0;

        do {
            randomInt32 = await this.getInt32();
        } while(randomInt32 === 0 || randomInt32 / upperLimit > safeLoops);

        const randomNumberInRange = randomInt32 % upperLimit;

        return randomNumberInRange;
    }

    /** Returns Uint32Array of specified length, but not longer than with 65536 elements */
    static async getUint32Array(length: number): Promise<Uint32Array> {
        const MAXIMUM_BYTES_PER_REQUEST = 0x10000;
        const BYTES_PER_INT32 = 4;
        const MAXIMUM_INT32_PER_REQUEST =
            MAXIMUM_BYTES_PER_REQUEST / BYTES_PER_INT32;

        if (length > MAXIMUM_INT32_PER_REQUEST) {
            throw new Error(
                `Length of requested Uint32Array shouldn\'t be longer than ${MAXIMUM_INT32_PER_REQUEST}`,
            );
        }

        const arrayWithRandomNumber = new Uint32Array(length);

        for (let i = 0; i < arrayWithRandomNumber.length; i++) {
            arrayWithRandomNumber[i] = await this.getInt32();
        }

        return arrayWithRandomNumber;
    }

    /** Merges 4 bytes received from OS random into signed int32 disrespecting first bit of first byte */
    static async getInt32(): Promise<number> {
        const BYTES_PER_INT32 = 4;
        const bytes = await Generator.randomBytes(BYTES_PER_INT32);

        const int32: number =
            (0x7f & (bytes[0] << 24)) |
            (bytes[1] << 16) |
            (bytes[2] << 8) |
            bytes[3];

        return int32;
    }
}

export default Random;
