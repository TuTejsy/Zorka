const fse = require('fs-extra');

const srcDirCrypto = 'polyfills/node-js/crypto';
const destDirCrypto = 'node_modules/crypto';

// To copy a folder or file
fse.copy(srcDirCrypto, destDirCrypto, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('success!');
    }
});

const srcDirAssert = 'polyfills/node-js/assert';
const destDirAssert = 'node_modules/assert';

// To copy a folder or file
fse.copy(srcDirAssert, destDirAssert, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('success!');
    }
});

const srcDirUrl = 'polyfills/node-js/url';
const destDirUrl = 'node_modules/url';

// To copy a folder or file
fse.copy(srcDirUrl, destDirUrl, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('success!');
    }
});
