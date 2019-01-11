import { combineReducers } from "redux";
import todos from "./todos";
import promodo from "./promodo";

export default combineReducers({
  todos,
  promodo
});
