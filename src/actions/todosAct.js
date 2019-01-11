import {
  TOGGLE_VISIBILITY_ADD_MODAL,
  ADD_TODO,
  SET_FOCUSED_TODO,
  FINISHED_TODO,
  UNFINISHED_TODO,
  GET_SHOWED_TODO,
  REMOVED_TODO
} from "../types";

export const toggleAddTodoModal = () => ({ type: TOGGLE_VISIBILITY_ADD_MODAL });
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const setFocusedTodo = todo => ({ type: SET_FOCUSED_TODO, payload: todo });
export const finishedTodo = todo => ({ type: FINISHED_TODO, payload: todo });
export const unfinishedTodo = todo => ({ type: UNFINISHED_TODO, payload: todo });
export const getShowedTodo = status => ({ type: GET_SHOWED_TODO, payload: status });
export const removeTodo = id => ({ type: REMOVED_TODO, payload: id });
