import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { reducers, rootSaga, middlewares } from 'appApi';

const configureStore = () => {
  const reducer = combineReducers(reducers);

  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(...middlewares, sagaMiddleware);

  const store = createStore(
    reducer,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(middleware)
      : middleware,
  );
  sagaMiddleware.run(rootSaga, store.dispatch);

  return store;
};

export default configureStore;
