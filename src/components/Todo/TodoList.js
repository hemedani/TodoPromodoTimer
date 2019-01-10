import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class TodoList extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
});

export default TodoList;
