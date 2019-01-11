import {
  DECREMENT_BREACK,
  DECREMENT_PROMODORO,
  INCREMENT_BREACK_ROUND,
  INCREMENT_PROMODORO_ROUND,
  SET_PROMODOORO_STATUS,
  SET_PLAY_STATUS
} from "../types";

const defaultState = {
  promodoroRound: 0,
  breakRound: 0,
  promodoroTime: 25 * 60,
  breakTime: 5 * 60,
  status: "Working Time",
  playStatus: "pasuse"
};

export default (state = defaultState, action) => {
  switch (action.payload) {
    case DECREMENT_PROMODORO:
      return { ...state, promodoroTime: promodoroTime - 1 };
    case DECREMENT_BREACK:
      return { ...state, breakTime: breakTime - 1 };
    case INCREMENT_PROMODORO_ROUND:
      return { ...state, promodoroRound: promodoroRound + 1 };
    case INCREMENT_BREACK_ROUND:
      return { ...state, breakRound: breakRound + 1 };
    case SET_PROMODOORO_STATUS:
      return { ...state, status: action.payload };
    case SET_PLAY_STATUS:
      return { ...state, playStatus: action.payload };
    default:
      return state;
  }
};
