import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const PromodoTimer = ({ focusedTodo }) => (
  <View style={styles.container}>
    <Text>PromodoTimer Page</Text>
    <Text>{focusedTodo.title}</Text>
    <Divider />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});

export default PromodoTimer;
