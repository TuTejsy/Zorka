import { Navigation, Options } from 'react-native-navigation';
import { call } from 'redux-saga/effects';

import { screensOptions } from 'appConfig/navigator';

interface PushToPropTypes {
    passProps: any;
    screenName: string;
    componentId: string;
    screenOptions?: Options;
}

function* pushTo({
    passProps,
    screenName,
    componentId,
    screenOptions,
}: PushToPropTypes) {
    const defaultScreenOptions = screensOptions[screenName] ?? {};

    const combinedScreenOptions = {
        ...defaultScreenOptions,
        ...screenOptions,
    };

    try {
        Navigation.push(componentId, {
            component: {
                name: screenName,
                options: combinedScreenOptions,
                passProps,
            },
        });
    } catch (err) {
        console.log(err);
    }
}

export { pushTo };
