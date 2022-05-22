
import { LOCALIZATION_MODE } from './common';
import { SCREENS_LOCALIZATION } from './screens';
import { COMPONENTS_LOCALIZATION } from './components';

export { LOCALIZATION_MODE };

export const LOCALIZAION_MODE_TITLE = {
    [LOCALIZATION_MODE.EN]: 'English',
    [LOCALIZATION_MODE.RU]: 'Русский',
};

export const LOCALIZATION = {
    ...SCREENS_LOCALIZATION,
    ...COMPONENTS_LOCALIZATION,
};
