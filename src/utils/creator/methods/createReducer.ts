
const createReducer = <S, P>(
    initialState: S,
    actionHandlers: {
        [action: string]: ActionHandler<S, P> | undefined
    } = {}
) => (
        state = initialState,
        action: Action<P>
    ) => {
        const actionHandler = actionHandlers[action.type];

        return actionHandler ? actionHandler(state, action) : state;
    };

export default createReducer;