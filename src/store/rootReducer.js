import { combineReducers } from 'redux';

import { timerCardReducer } from './TimerCard/timerCardReducer';

const rootReducer = combineReducers({
  timerCard: timerCardReducer,
});

export { rootReducer };
