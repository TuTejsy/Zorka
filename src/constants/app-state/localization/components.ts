import { LOCALIZATION_MODE } from './common';

export const COMPONENTS_LOCALIZATION = {
    TOASTR: {
        COPIED: {
            [LOCALIZATION_MODE.EN]: 'Copied',
            [LOCALIZATION_MODE.RU]: 'Скопировано',
        },
    },

    LEFT_SIDE_BAR: {
        TITLE: {
            [LOCALIZATION_MODE.EN]: 'Settings',
            [LOCALIZATION_MODE.RU]: 'Настройки',
        },
        ELEMENTS: {
            LANGUAGE: {
                [LOCALIZATION_MODE.EN]: 'Language',
                [LOCALIZATION_MODE.RU]: 'Язык',
            }
        },
        BUTTONS: {
            SECRET_PHRASE: {
                [LOCALIZATION_MODE.EN]: 'Secret Phrase',
                [LOCALIZATION_MODE.RU]: 'Секретная Фраза',
            },
            LOGOUT: {
                [LOCALIZATION_MODE.EN]: 'Logout',
                [LOCALIZATION_MODE.RU]: 'Выйти',
            }
        },
    },
};
