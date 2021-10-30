import { Options } from 'react-native-navigation';

interface PopPayload {
    componentId: string;
    screenName: string;
    screenOptions: Options;
}

interface PushPayload {
    componentId: string;
    screenName: string;
    screenOptions?: Options;
}
