import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button, Divider } from "react-native-elements";

import { hhmmss } from "../../utils/hhmmss";

class EachTodo extends PureComponent {
  constructor(props) {
    super(props);

    this.setFocusedTodo = this.setFocusedTodo.bind(this);
    this.finishedTodo = this.finishedTodo.bind(this);
    this.unfinishedTodo = this.unfinishedTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  setFocusedTodo() {
    this.props.setFocusedTodo(this.props.todo);
  }
  finishedTodo() {
    this.props.finishedTodo(this.props.todo);
  }

  unfinishedTodo() {
    this.props.unfinishedTodo(this.props.todo);
  }

  removeTodo() {
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <Card title={todo.title} borderRadius={8}>
        <View>
          <Text style={styles.description}>{todo.description}</Text>
          <Divider />
          <Text style={styles.description}>Focused Time : {hhmmss(todo.focusedTime)} </Text>
          <Divider />

          <View style={styles.btnContainer}>
            <Button small title="focus" backgroundColor="#B59B69" borderRadius={8} onPress={this.setFocusedTodo} />
            {todo.status === "Unfinished" ? (
              <Button title="finish" backgroundColor="#7B632F" borderRadius={8} onPress={this.finishedTodo} />
            ) : (
              <Button title="unfinish" backgroundColor="#B59B69" borderRadius={8} onPress={this.unfinishedTodo} />
            )}

            <Button small title="remove" borderRadius={8} backgroundColor="#de0000" onPress={this.removeTodo} />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  description: {
    paddingVertical: 15
  }
});

export default EachTodo;
