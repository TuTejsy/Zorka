import navigationTypes from './action-types';

import { PushPayload, ToggleSideBarPayload } from './types';

const push = (payload: PushPayload) => ({
    type: navigationTypes.PUSH,
    payload,
});

const toggleSideBar = (payload: ToggleSideBarPayload) => ({
    type: navigationTypes.TOGGLE_SIDE_MENU,
    payload,
});

export default {
    push,
    toggleSideBar,
};
