import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Header, Button } from "react-native-elements";

import {
  //todo actions
  toggleAddTodoModal,
  addTodo,
  setFocusedTodo,
  finishedTodo,
  unfinishedTodo,
  getShowedTodo,
  removeTodo,
  incrementFocusTime,

  //promodo actions
  decrementPromodoroTime,
  decrementBreakTime,
  incrementPromodoroRound,
  incrementBreackRound,
  setPromodoroStatus,
  setPlayStatus,
  setPromodoroTime,
  setBreakTime,
  setPromodoRound,
  setBreakRound
} from "./actions";

import TodoList from "./components/Todo/TodoList";
import AddTodo from "./components/Todo/AddTodo";
import PromodoTimer from "./components/Promodo/PromodoTimer";

const TodoPromodo = ({
  //todo props
  todos,
  addTodo,
  toggleAddTodoModal,
  setFocusedTodo,
  finishedTodo,
  unfinishedTodo,
  getShowedTodo,
  removeTodo,
  incrementFocusTime,

  //promodo props
  promodo,
  decrementPromodoroTime,
  decrementBreakTime,
  incrementPromodoroRound,
  incrementBreackRound,
  setPromodoroStatus,
  setPlayStatus,
  setPromodoroTime,
  setBreakTime,
  setPromodoRound,
  setBreakRound
}) => (
  <View style={styles.container}>
    <Header centerComponent={{ text: "Todo Promodo App", style: { color: "#fff" } }} />
    <View style={styles.pages}>
      <PromodoTimer
        focusedTodo={todos.focusedTodo}
        incrementFocusTime={incrementFocusTime}
        promodo={promodo}
        decrementPromodoroTime={decrementPromodoroTime}
        decrementBreakTime={decrementBreakTime}
        incrementPromodoroRound={incrementPromodoroRound}
        incrementBreackRound={incrementBreackRound}
        setPromodoroStatus={setPromodoroStatus}
        setPlayStatus={setPlayStatus}
        setPromodoroTime={setPromodoroTime}
        setBreakTime={setBreakTime}
        setPromodoRound={setPromodoRound}
        setBreakRound={setBreakRound}
      />
      <TodoList
        showedTodo={todos.showedTodo}
        removeTodo={removeTodo}
        setFocusedTodo={setFocusedTodo}
        finishedTodo={finishedTodo}
        unfinishedTodo={unfinishedTodo}
        getShowedTodo={getShowedTodo}
      />
    </View>
    <AddTodo addModalVisibilty={todos.addModalVisibilty} toggleAddTodoModal={toggleAddTodoModal} addTodo={addTodo} />
    <Button
      raised
      small={true}
      icon={{ name: "add" }}
      backgroundColor="#0035B0"
      borderRadius={8}
      title="Add To Do"
      onPress={toggleAddTodoModal}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10
  },
  pages: {
    flex: 1
  }
});

const msp = ({ todos, promodo }) => ({ todos, promodo });

export default connect(
  msp,
  {
    //todo actions
    toggleAddTodoModal,
    addTodo,
    setFocusedTodo,
    finishedTodo,
    unfinishedTodo,
    getShowedTodo,
    removeTodo,
    incrementFocusTime,

    //promodo actions
    decrementPromodoroTime,
    decrementBreakTime,
    incrementPromodoroRound,
    incrementBreackRound,
    setPromodoroStatus,
    setPlayStatus,
    setPromodoroTime,
    setBreakTime,
    setPromodoRound,
    setBreakRound
  }
)(TodoPromodo);
