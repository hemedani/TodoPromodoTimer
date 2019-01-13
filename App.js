import React from "react";
import TodoPromodo from "./src/TodoPromodo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store } from "./src/configureStore";
import { persistor } from "./src/configureStore";
export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TodoPromodo />
        </PersistGate>
      </Provider>
    );
  }
}

// import React from "react";
// import { Provider } from "react-redux";
// import TodoPromodo from "./src/TodoPromodo";

// import { store } from "./src/configureStore";
// export default class App extends React.PureComponent {
//   render() {
//     return (
//       <Provider store={store}>
//         <TodoPromodo />
//       </Provider>
//     );
//   }
// }
