import { Platform } from 'react-native';

Object.defineProperty(global, 'isIos', {
    value: Platform.OS === 'ios',
});

Object.defineProperty(global, 'isAndroid', {
    value: Platform.OS === 'android',
});
