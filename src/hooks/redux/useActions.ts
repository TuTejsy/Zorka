import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

import { actionCreators } from 'appApi/client';

import { ACTION_CREATORS_TYPES } from '../types';

function useActions<T>(actions: Array<keyof ACTION_CREATORS_TYPES>): T {
    const dispatch = useDispatch();

    const dispatchers: any = useMemo(
        () => actions.map(action => bindActionCreators(actionCreators[action], dispatch)),
        [actions, dispatch]
    );

    return (dispatchers as T);
}

export default useActions;
