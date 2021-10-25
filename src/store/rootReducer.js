import { combineReducers } from 'redux';

import { timerCardReducer } from './TimerCard/timerCard';

const rootReducer = combineReducers({
  timerCard: timerCardReducer,
});

export { rootReducer };
