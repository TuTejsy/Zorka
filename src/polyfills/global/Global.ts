import { Platform } from 'react-native';

Object.defineProperty(global, 'isIos', {
    value: Platform.OS === 'ios',
});

Object.defineProperty(global, 'isAndroid', {
    value: Platform.OS === 'android',
});

// Inject node globals into React Native global scope
global.__dirname = typeof __dirname === 'undefined' ? '/' : __dirname;
global.__filename = typeof __filename === 'undefined' ? '' : __filename;
global.Buffer = typeof Buffer === 'undefined' ? require('buffer').Buffer : Buffer;

if (typeof process === 'undefined') {
    global.process = require('process');
} else {
    const bProcess = require('process');
    for (const p in bProcess) {
        if (!(p in process)) {
            process[p] = bProcess[p];
        }
    }
}

global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';

// Ethers.js shims - must be imported after randomBytes polyfill
// require('ethers/dist/shims.js');
