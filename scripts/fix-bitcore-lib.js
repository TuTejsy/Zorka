const fs = require('fs');
const path = require('path');


function searchFileFromDir(startPath, filter, callback) {
    if (!fs.existsSync(startPath)) {
        console.log('searchFileFromDir: no dir ', startPath);

        return;
    }

    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(startPath, files[i]);
        const stat = fs.lstatSync(filePath);

        if (stat.isDirectory()) {
            searchFileFromDir(filePath, filter, callback); // recurse
        } else if (filter.test(filePath)) {
            callback(filePath);
        }
    };
};

function fixBitcoreLib(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }
        const textToReplcase = 'if (version !== undefined) {\n' +
    '    var message = \'More than one instance of bitcore-lib found. \' +\n' +
    '      \'Please make sure to require bitcore-lib and check that submodules do\' +\n' +
    '      \' not also include their own bitcore-lib dependency.\';\n' +
    '    throw new Error(message);\n' +
    '  }\n';

        const result = data
            .replace(textToReplcase, ' return;');

        fs.writeFile(filePath, result, 'utf8', (err) => {
            if (err) {
                return console.log(err);
            }
        });
    });
}

searchFileFromDir('./node_modules', /\.js/, (filePath) => {
    fixBitcoreLib(filePath);
});
