module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src/'],
        alias: {
          app: './src',
          appApi: './src/api',
          A_SCCL: './src/scclA',
          appData: './src/data',
          appSCCL: './src/sccl',
          appUtils: './src/utils',
          appHooks: './src/hooks',
          appConfig: './src/config',
          appAssets: './src/assets',
          appDatabase: './src/database',
          appEmitters: './src/emitters',
          appConstants: './src/constants',
          appComponents: './src/components',
          appContainers: './src/containers',
          appCollections: './src/collections',
        },
      },
      ,
    ],
  ],
};
