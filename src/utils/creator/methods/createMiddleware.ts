const createMiddleware =
    actionHandlers =>
    ({ dispatch, getState }) =>
    next =>
    action => {
        const actionHandler = actionHandlers[action.type];

        if (actionHandler) {
            Promise.resolve(
                actionHandler({ dispatch, getState, payload: action.payload }),
            )
                .then(() => {
                    next(action);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            next(action);
        }
    };

export default createMiddleware;
