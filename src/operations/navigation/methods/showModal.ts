import { Navigation } from 'react-native-navigation';
import { screensOptions } from 'appConfig/navigator';
import { ShowModalPayload } from '../types';


function* showModal({
    passProps,
    screenName,
    screenOptions,
}: ShowModalPayload) {
    const defaultScreenOptions = screensOptions[screenName] ?? {};

    const combinedScreenOptions = {
        ...defaultScreenOptions,
        ...screenOptions,
    };

    try {
        const shoModalPromise = Navigation.showModal({
            component: {
                name: screenName,
                options: combinedScreenOptions,
                passProps,
            }
        });

        yield shoModalPromise;
    } catch(err) {
        console.log(err);
    }
}

export default showModal;
