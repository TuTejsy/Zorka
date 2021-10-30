import navigationTypes from './action-types';

import { PushPayload } from './types';

const push = (payload: PushPayload) => ({
    type: navigationTypes.PUSH,
    payload,
});

export default {
    push,
};
