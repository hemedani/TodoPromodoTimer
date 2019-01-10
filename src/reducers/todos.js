import { TOGGLE_VISIBILITY_ADD_MODAL, ADD_TODO } from "../types";

const defaultState = {
  addModalVisibilty: false,
  todoList: []
};

export default (todos = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY_ADD_MODAL:
      return { ...state, addModalVisibilty: !state.addModalVisibilty };
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
});
