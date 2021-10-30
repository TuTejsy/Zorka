import { NativeModules } from 'react-native';
import SInfo from 'react-native-sensitive-info';

const ZorkaNative = NativeModules.ZorkaNative;

class Keychain {
    static getItem = async (key: string) => {
        let result = null;
        try {
            result = await SInfo.getItem(key, {
                keychainService: ZorkaNative.bundleId,
            });
        } finally {
            return result;
        }
    };

    static setItem = (key: string, value: string) =>
        SInfo.setItem(key, value, {
            keychainService: ZorkaNative.bundleId,
        });

    static removeItem = (key: string) =>
        SInfo.deleteItem(key, {
            keychainService: ZorkaNative.bundleId,
        });

    static getAllItems = () =>
        SInfo.getAllItems({
            keychainService: ZorkaNative.bundleId,
        });

    static clear = async () => {
        if (global.isIos) {
            const [items] = await Keychain.getAllItems();

            items?.forEach(async ({ key }) => {
                await Keychain.removeItem(key);
            });
        } else if (global.isAndroid) {
            const keychain = await Keychain.getAllItems();

            if (keychain) {
                const keys = Object.keys(keychain);

                keys?.forEach(async key => {
                    await Keychain.removeItem(key);
                });
            }
        }
    };

    static getItems = async (keys: Array<string>) => {
        const result = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = await Keychain.getItem(key);
            try {
                result.push(JSON.parse(value));
            } catch (err) {
                result.push(value);
            }
        }

        return result;
    };
}

export default Keychain;
