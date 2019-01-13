import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider, Icon } from "react-native-elements";

import { hhmmss } from "../../utils/hhmmss";

class PromodoTimer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.timer = null;
    this.startPromodoro = this.startPromodoro.bind(this);
    this.calcTimer = this.calcTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.showingTimerAndRound = this.showingTimerAndRound.bind(this);
  }

  startPromodoro() {
    if (this.props.promodo.playStatus === "play") {
      if (this.props.promodo.status === "Working Time") {
        if (this.props.promodo.promodoroTime > 0) {
          this.props.decrementPromodoroTime();
          if (this.props.focusedTodo.id) {
            this.props.incrementFocusTime(this.props.focusedTodo.id);
          }
        } else {
          if (this.props.promodo.promodoroRound === 4) {
            this.props.setBreakTime(10 * 60);
            this.props.setPromodoroStatus("Rest Time");
            this.props.setPromodoroTime(25 * 60);
            this.props.setPromodoRound(1);
            this.props.setBreakRound(0);
          } else {
            this.props.setPromodoroStatus("Rest Time");
            this.props.incrementPromodoroRound();
            this.props.setPromodoroTime(25 * 60);
          }
        }
      } else if (this.props.promodo.status === "Rest Time") {
        if (this.props.promodo.breakTime > 0) {
          this.props.decrementBreakTime();
        } else {
          this.props.setPromodoroStatus("Working Time");
          this.props.incrementBreackRound();
          this.props.setBreakTime(5 * 60);
        }
      }
    } else {
      clearInterval(this.timer);
    }
  }

  calcTimer() {
    this.props.setPlayStatus("play");
    this.props.setPromodoroStatus("Working Time");
    this.timer = setInterval(this.startPromodoro, 1000);
  }

  clearTimer() {
    this.props.setPlayStatus("pause");
    this.props.setPromodoroStatus("Nothing");
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  showingTimerAndRound() {
    if (this.props.promodo.status === "Working Time") {
      return `${this.props.promodo.status} - at round : ${this.props.promodo.promodoroRound}`;
    } else if (this.props.promodo.status === "Rest Time") {
      return `${this.props.promodo.status} - at round : ${this.props.promodo.breakRound}`;
    } else {
      return "Nothing";
    }
  }

  render() {
    const { focusedTodo, promodo } = this.props;
    return (
      <View style={styles.container}>
        <Text>You are in : {this.showingTimerAndRound()}</Text>
        <Text style={styles.timer}>
          {promodo.status === "Rest Time" ? hhmmss(promodo.breakTime) : hhmmss(promodo.promodoroTime)}
        </Text>
        {promodo.playStatus === "pause" ? (
          <Icon reverse raised name="play-circle" type="font-awesome" color="#0035B0" size={20} onPress={this.calcTimer} />
        ) : (
          <Icon reverse raised name="pause-circle" type="font-awesome" color="#FF4E3F" size={20} onPress={this.clearTimer} />
        )}
        <Text>Focused Todo : {focusedTodo.title}</Text>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "space-between",
    alignItems: "center"
  },
  timer: {
    fontSize: 35
  }
});

export default PromodoTimer;
