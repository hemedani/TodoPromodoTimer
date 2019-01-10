import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Divider, Header, Button } from "react-native-elements";

import { toggleAddTodoModal } from "./actions";

import TodoList from "./components/Todo/TodoList";
import AddTodo from "./components/Todo/AddTodo";
import PromodoTimer from "./components/Promodo/PromodoTimer";

class TodoPromodo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: "Todo Promodo App", style: { color: "#fff" } }} />
        <PromodoTimer />
        <Divider style={{ backgroundColor: "blue" }} />
        <TodoList todoList={this.props.todos.todoList} />
        <AddTodo addModalVisibilty={this.props.todos.addModalVisibilty} toggleAddTodoModal={this.props.toggleAddTodoModal} />
        <Button raised icon={{ name: "add" }} title="Add To Do" onPress={this.props.toggleAddTodoModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const msp = ({ todos }) => ({ todos });

export default connect(
  msp,
  { toggleAddTodoModal }
)(TodoPromodo);
