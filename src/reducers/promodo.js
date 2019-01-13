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

const defaultState = {
  promodoroRound: 1,
  breakRound: 1,
  promodoroTime: 25 * 60,
  breakTime: 5 * 60,
  status: "Nothing",
  playStatus: "pause"
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case DECREMENT_PROMODORO:
      return { ...state, promodoroTime: --state.promodoroTime };
    case SET_PROMODO_TIME:
      return { ...state, promodoroTime: action.payload };
    case SET_BREAK_TIME:
      return { ...state, breakTime: action.payload };
    case SET_PROMODO_ROUND:
      return { ...state, promodoroRound: action.payload };
    case SET_BREAK_ROUND:
      return { ...state, breakRound: action.payload };
    case DECREMENT_BREACK:
      return { ...state, breakTime: --state.breakTime };
    case INCREMENT_PROMODORO_ROUND:
      return { ...state, promodoroRound: ++state.promodoroRound };
    case INCREMENT_BREACK_ROUND:
      return { ...state, breakRound: ++state.breakRound };
    case SET_PROMODOORO_STATUS:
      return { ...state, status: action.payload };
    case SET_PLAY_STATUS:
      return { ...state, playStatus: action.payload };
    default:
      return state;
  }
};
