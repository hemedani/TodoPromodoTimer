import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import { hhmmss } from "../../utils/hhmmss";

class PromodoTimer extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  render() {
    const { focusedTodo, promodo } = this.props;
    return (
      <View style={styles.container}>
        <Text>{promodo.status}</Text>
        <Text style={styles.timer}>{hhmmss(promodo.promodoroTime)} </Text>
        <Text>Focused Todo : {focusedTodo.title}</Text>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  timer: {
    fontSize: 35
  }
});

export default PromodoTimer;
