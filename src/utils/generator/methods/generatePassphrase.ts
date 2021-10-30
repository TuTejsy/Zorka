import dictionary from 'appData/dictionary.json';

import { SECRETPHRASE_LENGTH } from 'appConstants';
import { Random } from '../../random';

const getRandomWord = async (): Promise<string> =>
    dictionary[await Random.getRandomNumberUpTo(dictionary.length)];

const generatePassphrase = async (): Promise<string> => {
    const phrase: Array<string> = [];
    for (let i = 0; i < SECRETPHRASE_LENGTH; i++) {
        const word = await getRandomWord();
        phrase.push(word.toUpperCase());
    }

    const finalPassphrase = phrase.join(' ');

    console.log('---------- PASSPHRASE -----------');
    console.log(finalPassphrase);
    console.log('---------------------------------');
    return finalPassphrase;
};

export default generatePassphrase;
