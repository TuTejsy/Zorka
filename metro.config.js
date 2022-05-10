/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

module.exports = {
    resolver: {
        ...defaultResolver,
        extraNodeModules: require('node-libs-react-native'),
        sourceExts: [
            ...defaultResolver.sourceExts,
            'cjs',
        ],
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
};
