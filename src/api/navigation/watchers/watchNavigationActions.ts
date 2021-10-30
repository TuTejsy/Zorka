import { call, take, fork, race } from 'redux-saga/effects';

import navigationTypes from '../action-types';
import { PopPayload, PushPayload } from '../types';

import { pushTo } from '../operations';

export default function* () {
    yield fork(watchNavigationActions);
}

function* watchNavigationActions() {
    while (true) {
        const { popEvent, pushEvent } = yield race({
            popEvent: take(navigationTypes.POP),
            pushEvent: take(navigationTypes.PUSH),
        });

        switch (true) {
            case !!popEvent: {
                const { payload }: { payload: PopPayload } = popEvent;
                break;
            }

            case !!pushEvent: {
                const {
                    payload: { componentId, screenName, screenOptions },
                }: { payload: PushPayload } = pushEvent;

                yield call(pushTo, { componentId, screenName, screenOptions });
                break;
            }
        }
    }
}
