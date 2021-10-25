import { SET_ACTIVE, SET_RESULTS } from './const';

const initialState = {
  isActive: false,
  results: [],
};

export const timerCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {
        ...state,
        isActive: action.payload,
      };
    case SET_RESULTS:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    default:
      return state;
  }
};
