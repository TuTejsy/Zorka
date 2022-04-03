import { call, take, fork, race } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import { actionTypes } from 'appApi/client';


import { NAVIGATION } from 'appConstants';
import { operations } from 'appOperations';

export default function* () {
    yield fork(watchNavigationActions);
}

function* watchNavigationActions() {
    while(true) {
        const {
            popEvent,
            pushEvent,
            showModalEvent,
            toggleSideMenuEvent,
        } = yield race({
            popEvent: take(actionTypes.POP),
            pushEvent: take(actionTypes.PUSH),
            showModalEvent: take(actionTypes.SHOW_MODAL),
            toggleSideMenuEvent: take(actionTypes.TOGGLE_SIDE_MENU),
        });

        switch(true) {
            case !!popEvent: {
                const { payload }: { payload: PopPayload } = popEvent;
                break;
            }

            case !!pushEvent: {
                const {
                    payload: {
                        componentId,
                        screenName,
                        passProps,
                        screenOptions,
                    },
                }: { payload: PushPayload } = pushEvent;

                yield call(operations.pushTo, {
                    componentId,
                    screenName,
                    passProps,
                    screenOptions,
                });
                break;
            }

            case !!showModalEvent: {
                const {
                    payload: {
                        screenName,
                        passProps,
                        screenOptions,
                    },
                }: { payload: ShowModalPayload } = showModalEvent;

                yield call(operations.showModal, {
                    screenName,
                    passProps,
                    screenOptions,
                });

                break;
            }

            case !!toggleSideMenuEvent: {
                const { payload: {
                    visible,
                } }: { payload: ToggleSideBarPayload } = toggleSideMenuEvent;

                Navigation.mergeOptions(NAVIGATION.COMPONENTS.CORE.LEFT_SIDE_MENU, {
                    sideMenu: {
                        left: {
                            visible,
                        },
                    }
                });
                break;
            }
        }
    }
}
