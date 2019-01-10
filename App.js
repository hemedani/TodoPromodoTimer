import React from "react";
import TodoPromodo from "./src/TodoPromodo";
import { Provider } from "react-redux";
import { store } from "./src/configureStore";
export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <TodoPromodo />
      </Provider>
    );
  }
}
