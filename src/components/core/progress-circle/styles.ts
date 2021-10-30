import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
    },
    content: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    svg: {
        transform: [ { rotateZ: '270deg' } ],
    },
});
