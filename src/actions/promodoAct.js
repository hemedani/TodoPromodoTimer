import {
  DECREMENT_BREACK,
  DECREMENT_PROMODORO,
  INCREMENT_BREACK_ROUND,
  INCREMENT_PROMODORO_ROUND,
  SET_PROMODOORO_STATUS,
  SET_PLAY_STATUS,
  SET_PROMODO_TIME,
  SET_BREAK_TIME,
  SET_PROMODO_ROUND,
  SET_BREAK_ROUND
} from "../types";

export const decrementPromodoroTime = () => ({ type: DECREMENT_PROMODORO });
export const decrementBreakTime = () => ({ type: DECREMENT_BREACK });
export const incrementPromodoroRound = () => ({ type: INCREMENT_PROMODORO_ROUND });
export const incrementBreackRound = () => ({ type: INCREMENT_BREACK_ROUND });
export const setPlayStatus = payload => ({ type: SET_PLAY_STATUS, payload });
export const setPromodoroStatus = status => ({ type: SET_PROMODOORO_STATUS, payload: status });
export const setPromodoroTime = payload => ({ type: SET_PROMODO_TIME, payload });
export const setBreakTime = payload => ({ type: SET_BREAK_TIME, payload });
export const setPromodoRound = payload => ({ type: SET_PROMODO_ROUND, payload });
export const setBreakRound = payload => ({ type: SET_BREAK_ROUND, payload });
