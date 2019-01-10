import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import AddTodo from "./components/AddTodo";

class TodoPromodo extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
});

export default TodoPromodo;
