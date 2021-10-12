import { Options } from 'react-native-navigation';

import { Screen } from 'appUtils';
import { DEVICE_ORIENTATION, NAVIGATION } from 'appConstants';

interface ScreensOptions {
    [screenName: string]: Options
}

const screensOptions: ScreensOptions = {
    [ NAVIGATION.SCREENS.COMMON.INTERNAL_BROWSER ] : {
        bottomTabs: {
            visible: false,
        }
    },

    [ NAVIGATION.SCREENS.AUTH.ERROR]: {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.SIGN_UP] : {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.SIGN_IN] : {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.AUTO_LOCK]: {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.CREATE_PIN]: {
        bottomTabs: {
            visible: false,
        },
        popGesture: false,
    },
    [ NAVIGATION.SCREENS.AUTH.LOCK_YOUR_APP]: {
        bottomTabs: {
            visible: false,
        },
        popGesture: false,
    },
    [ NAVIGATION.SCREENS.AUTH.CHECK_EMAIL] : {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.SAVE_DETAILS]: {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.SCAN_QR_CODE] : {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.AUTH.CHECK_ACCESS_KEY] : {
        bottomTabs: {
            visible: false,
        }
    },

    [NAVIGATION.SCREENS.MESSAGES.INFO] : {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.MESSAGES.DIRECT] : {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.MESSAGES.CHANNEL] : {
        bottomTabs: {
            visible: false,
        }
    },
    [ NAVIGATION.SCREENS.MESSAGES.CHAT_GALLERY ] : {
        layout: {
            orientation: [DEVICE_ORIENTATION.PORTRAIT, DEVICE_ORIENTATION.LANDSCAPE]
        },
        animations: {
            pop: {
                content: {
                    alpha: {
                        from: 1,
                        to: 0,
                        duration: 300
                    },
                }
            }
        }
    },
    [ NAVIGATION.SCREENS.MESSAGES.DRAFT_GALLERY ] : {
        layout: {
            orientation: [DEVICE_ORIENTATION.PORTRAIT, DEVICE_ORIENTATION.LANDSCAPE]
        },
        animations: {
            pop: {
                content: {
                    alpha: {
                        from: 1,
                        to: 0,
                        duration: 300
                    },
                }
            }
        }
    },
    [NAVIGATION.SCREENS.MESSAGES.SHARED_MEDIA] : {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.MESSAGES.CREATE_CHANNEL] : {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.SAFE.SAFE_ITEMS] : {
        bottomTabs: {
            visible: false,
        },
        popGesture: false,
    },

    [NAVIGATION.SCREENS.MESSAGES.ADD_TO_SAFE] : {
        popGesture: false,
    },

    [NAVIGATION.MODALS.PEOPLE.INVITE_MEMBER]: {
        bottomTabs: {
            visible: false,
        }
    },

    [NAVIGATION.SCREENS.SAFE.FILE_INFO]: {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.SAFE.SHARE_INTERNAL]: {
        bottomTabs: {
            visible: false,
        },
        animations: {
            push: {
                content: {
                    translationY: {
                        from: Screen.height,
                        to: 0,
                        duration: 300
                    }
                }
            },
            pop: {
                content:{
                    translationY: {
                        from: 0,
                        to: Screen.height,
                        duration: 300
                    }
                }
            }
        }
    },
    [ NAVIGATION.SCREENS.SAFE.GALLERY ] : {
        layout: {
            orientation: [DEVICE_ORIENTATION.PORTRAIT, DEVICE_ORIENTATION.LANDSCAPE]
        },
        animations: {
            pop: {
                content: {
                    alpha: {
                        from: 1,
                        to: 0,
                        duration: 300
                    },
                }
            }
        }
    },

    [NAVIGATION.SCREENS.ME.HOME] : {
        statusBar: {
            style: 'dark',
            backgroundColor: 'white',
        }
    },

    [NAVIGATION.SCREENS.SETTINGS.HOME]: {
        bottomTabs: {
            visible: false,
        }
    },
    [NAVIGATION.SCREENS.SETTINGS.AUTH]: {
        bottomTabs: {
            visible: false,
        }
    },

    [NAVIGATION.MODALS.MESSAGES.ADD_MEMBERS]: {
        bottomTabs: {
            visible: false,
        }
    },

    [NAVIGATION.OVERLAYS.NO_ACCESS_TO_ORIGINAL_ITEM]: {
        layout: {
            orientation: [DEVICE_ORIENTATION.PORTRAIT, DEVICE_ORIENTATION.LANDSCAPE]
        }
    }
};

export default screensOptions;
