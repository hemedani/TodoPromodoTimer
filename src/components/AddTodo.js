import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class AddTodo extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Todo Modal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AddTodo;
