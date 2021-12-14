import { Options } from 'react-native-navigation';

interface PopPayload {
    componentId: string;
    screenName: string;
    screenOptions: Options;
}

interface ShowModalPayload {
    screenName: string;
    passProps?: any;
    screenOptions?: Options;
}

interface PushPayload {
    componentId: string;
    screenName: string;
    passProps?: any;
    screenOptions?: Options;
}

interface ToggleSideBarPayload {
    visible: boolean,
}
