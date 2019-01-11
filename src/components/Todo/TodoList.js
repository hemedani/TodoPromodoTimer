import React, { PureComponent } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonGroup } from "react-native-elements";

import EachTodo from "./EachTodo";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  componentDidMount() {
    this.props.getShowedTodo("Unfinished");
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    selectedIndex === 0 && this.props.getShowedTodo("Unfinished");
    selectedIndex === 1 && this.props.getShowedTodo("Finished");
    selectedIndex === 2 && this.props.getShowedTodo("All");
  }
  render() {
    const { showedTodo, setFocusedTodo, finishedTodo, unfinishedTodo, removeTodo } = this.props;
    const buttons = ["Unfinished", "Finished", "All"];
    const { selectedIndex } = this.state;
    return (
      <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 20 }}
        />
        <ScrollView>
          {showedTodo.map(todo => (
            <EachTodo
              key={todo.id}
              todo={todo}
              setFocusedTodo={setFocusedTodo}
              finishedTodo={finishedTodo}
              unfinishedTodo={unfinishedTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingBottom: 5
  }
});

export default TodoList;
