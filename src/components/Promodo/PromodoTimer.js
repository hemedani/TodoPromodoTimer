import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class PromodoTimer extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>PromodoTimer Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PromodoTimer;
