import { SET_ACTIVE, SET_RESULTS } from './const';

const timerCardSetActive = (isActive) => ({
  type: SET_ACTIVE,
  payload: isActive,
});

const timerCardSetResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});

export { timerCardSetActive, timerCardSetResults };
