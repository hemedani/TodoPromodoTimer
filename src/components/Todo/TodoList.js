import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const TodoList = ({ todoList }) => (
  <View style={styles.container}>
    <ScrollView>
      {todoList.map((u, i) => (
        <Card key={i} title={u.title}>
          <View>
            <Text>{u.description}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom: 5
  }
});

export default TodoList;
