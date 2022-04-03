module.exports = {
    presets: [ 'module:metro-react-native-babel-preset' ],
    plugins: [
        [
            'babel-plugin-module-resolver',
            {
                alias: {
                    app: './src',
                    appApi: './src/api',
                    appData: './src/data',
                    appSCCL: './src/sccl',
                    appUtils: './src/utils',
                    appHooks: './src/hooks',
                    appState: './src/state',
                    appConfig: './src/config',
                    appAssets: './src/assets',
                    appDatabase: './src/database',
                    appEmitters: './src/emitters',
                    appWatchers: './src/watchers',
                    appConstants: './src/constants',
                    appComponents: './src/components',
                    appOperations: './src/operations',
                    appContainers: './src/containers',
                    appCollections: './src/collections',

                    'zorka-native': './zorka-native',
                },
            },
        ],
    ],
};
