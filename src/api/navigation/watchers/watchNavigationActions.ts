import { call, take, fork, race } from 'redux-saga/effects';
import { Navigation } from 'react-native-navigation';

import navigationTypes from '../action-types';
import { PopPayload, PushPayload } from '../types';

import { NAVIGATION } from '../constants';
import navigationOperations from '../operations';
import { ToggleSideBarPayload } from 'api/types';

export default function* () {
    yield fork(watchNavigationActions);
}

function* watchNavigationActions() {
    while(true) {
        const { popEvent, pushEvent, toggleSideMenuEvent } = yield race({
            popEvent: take(navigationTypes.POP),
            pushEvent: take(navigationTypes.PUSH),
            toggleSideMenuEvent: take(navigationTypes.TOGGLE_SIDE_MENU),
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

                yield call(navigationOperations.pushTo, {
                    componentId,
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
