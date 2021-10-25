import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const isDev = process.env.NODE_ENV === 'development';

const makeStore = () => {
  const store = createStore(
    rootReducer,
    isDev ? composeWithDevTools(applyMiddleware()) : applyMiddleware(),
  );

  return store;
};

export { makeStore };
