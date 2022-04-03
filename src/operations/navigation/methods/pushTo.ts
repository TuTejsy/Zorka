import { Navigation } from 'react-native-navigation';

import { screensOptions } from 'appConfig/navigator';
import { PushToPayload } from '../types';

function* pushTo({
    passProps,
    screenName,
    componentId,
    screenOptions,
}: PushToPayload) {
    const defaultScreenOptions = screensOptions[screenName] ?? {};

    const combinedScreenOptions = {
        ...defaultScreenOptions,
        ...screenOptions,
    };

    try {
        const pushPromise = Navigation.push(componentId, {
            component: {
                name: screenName,
                options: combinedScreenOptions,
                passProps,
            },
        });

        yield pushPromise;
    } catch(err) {
        console.log(err);
    }
}

export default pushTo;
