import {
  TOGGLE_VISIBILITY_ADD_MODAL,
  ADD_TODO,
  GET_SHOWED_TODO,
  FINISHED_TODO,
  UNFINISHED_TODO,
  SET_FOCUSED_TODO,
  REMOVED_TODO
} from "../types";
import { v1 } from "uuid";
import _ from "lodash";
import { immutableSplice } from "../utils/Imutable";

const defaultState = {
  addModalVisibilty: false,
  todoList: [],
  showedTodo: [],
  focusedTodo: {},
  showedStatus: "Unfinished"
};

export default (todos = (state = defaultState, action) => {
  let showedTodo, updatedTodo, newTodo, todoList, index;
  switch (action.type) {
    case TOGGLE_VISIBILITY_ADD_MODAL:
      return { ...state, addModalVisibilty: !state.addModalVisibilty };
    case ADD_TODO:
      newTodo = { ...action.payload, id: v1(), status: "Unfinished" };
      return { ...state, todoList: [...state.todoList, newTodo], showedTodo: [...state.showedTodo, newTodo] };
    case SET_FOCUSED_TODO:
      return { ...state, focusedTodo: action.payload };
    case FINISHED_TODO:
      index = _.findIndex(state.todoList, { id: action.payload.id });
      updatedTodo = { ...action.payload, status: "Finished" };
      todoList = immutableSplice(state.todoList, index, 1, updatedTodo);
      state.showedStatus === "All"
        ? (showedTodo = todoList)
        : (showedTodo = state.showedTodo.filter(todo => todo.id !== action.payload.id));
      return { ...state, todoList, showedTodo };
    case UNFINISHED_TODO:
      index = _.findIndex(state.todoList, { id: action.payload.id });
      updatedTodo = { ...action.payload, status: "Unfinished" };
      todoList = immutableSplice(state.todoList, index, 1, updatedTodo);
      state.showedStatus === "All"
        ? (showedTodo = todoList)
        : (showedTodo = state.showedTodo.filter(todo => todo.id !== action.payload.id));
      return { ...state, todoList, showedTodo };
    case GET_SHOWED_TODO:
      if (action.payload === "All") {
        showedTodo = state.todoList;
      } else {
        showedTodo = state.todoList.filter(todo => todo.status === action.payload);
      }
      return { ...state, showedTodo, showedStatus: action.payload };
    case REMOVED_TODO:
      todoList = state.todoList.filter(todo => todo.id !== action.payload);
      showedTodo = state.showedTodo.filter(todo => todo.id !== action.payload);
      return { ...state, showedTodo, todoList };
    default:
      return state;
  }
});
