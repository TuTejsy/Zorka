import { Options } from 'react-native-navigation';

interface PushToPayload {
    passProps: any;
    screenName: string;
    componentId: string;
    screenOptions?: Options;
}

interface ShowModalPayload {
    screenName: string;
    passProps?: any;
    screenOptions?: Options;
}
