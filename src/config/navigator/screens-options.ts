import { Options } from 'react-native-navigation';

import { Screen } from 'appUtils';
import { DEVICE_ORIENTATION, NAVIGATION } from 'appConstants';

interface ScreensOptions {
    [screenName: string]: Options;
}

const screensOptions: ScreensOptions = {};

export default screensOptions;
