import { TOGGLE_VISIBILITY_ADD_MODAL } from "../types";

const defaultState = {
  addModalVisibilty: false,
  todoList: []
};

export default (todos = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY_ADD_MODAL:
      return { ...state, addModalVisibilty: !state.addModalVisibilty };
    default:
      return state;
  }
});
