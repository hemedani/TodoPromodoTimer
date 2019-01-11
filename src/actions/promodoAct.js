import {
  DECREMENT_BREACK,
  DECREMENT_PROMODORO,
  INCREMENT_BREACK_ROUND,
  INCREMENT_PROMODORO_ROUND,
  SET_PROMODOORO_STATUS,
  SET_PLAY_STATUS
} from "../types";

export const decrementPromodoroTime = () => ({ type: DECREMENT_PROMODORO });
export const decrementBreakTime = () => ({ type: DECREMENT_BREACK });
export const incrementPromodoroRound = () => ({ type: INCREMENT_PROMODORO_ROUND });
export const incrementBreackRound = () => ({ type: INCREMENT_BREACK_ROUND });
export const setPlayStatus = () => ({ type: SET_PLAY_STATUS });
export const setPromodoroStatus = status => ({ type: SET_PROMODOORO_STATUS, payload: status });
