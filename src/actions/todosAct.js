import { TOGGLE_VISIBILITY_ADD_MODAL, ADD_TODO } from "../types";

export const toggleAddTodoModal = () => ({ type: TOGGLE_VISIBILITY_ADD_MODAL });
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
