import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Header, Button } from "react-native-elements";

import { toggleAddTodoModal, addTodo } from "./actions";

import TodoList from "./components/Todo/TodoList";
import AddTodo from "./components/Todo/AddTodo";
import PromodoTimer from "./components/Promodo/PromodoTimer";

const TodoPromodo = ({ todos, addTodo, toggleAddTodoModal }) => (
  <View style={styles.container}>
    <Header centerComponent={{ text: "Todo Promodo App", style: { color: "#fff" } }} />
    <View style={styles.pages}>
      <PromodoTimer />
      <TodoList todoList={todos.todoList} />
    </View>
    <AddTodo addModalVisibilty={todos.addModalVisibilty} toggleAddTodoModal={toggleAddTodoModal} addTodo={addTodo} />
    <Button raised icon={{ name: "add" }} title="Add To Do" onPress={toggleAddTodoModal} />
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

const msp = ({ todos }) => ({ todos });

export default connect(
  msp,
  { toggleAddTodoModal, addTodo }
)(TodoPromodo);
