import { ErrorManager } from 'appUtils';

const createMiddleware =
    actionHandlers =>
        ({ dispatch, getState }) =>
            next =>
                (action) => {
                    const actionHandler = actionHandlers[action.type];

                    if (actionHandler) {
                        Promise.resolve(
                            actionHandler({ dispatch, getState, payload: action.payload })
                        ).then(() => {
                            next(action);
                        }).catch((err) => {
                            ErrorManager.captureException({
                                err,
                                file: 'createMiddleware.ts',
                                function: 'middleware function',
                                customMessage: `Tried to handle "${action.type}" action type`
                            });
                        });
                    } else {
                        next(action);
                    }
                };

export default createMiddleware;