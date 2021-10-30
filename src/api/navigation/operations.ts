import { Navigation, Options } from 'react-native-navigation';
import { call } from 'redux-saga/effects';

import { screensOptions } from 'appConfig/navigator';

interface PushToPropTypes {
    screenName: string;
    componentId: string;
    screenOptions?: Options;
}

function* pushTo({ screenName, componentId, screenOptions }: PushToPropTypes) {
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
            },
        });
    } catch (err) {
        console.log(err);
    }
}

export { pushTo };
