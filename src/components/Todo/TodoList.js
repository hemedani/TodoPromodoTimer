import React, { PureComponent } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, Button, ButtonGroup } from "react-native-elements";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
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
          {showedTodo.map(u => (
            <Card key={u.id} title={u.title}>
              <View>
                <Text>{u.description}</Text>
                <View style={styles.btnContainer}>
                  <Button small title="focus" backgroundColor="#B59B69" borderRadius={8} onPress={() => setFocusedTodo(u)} />
                  {u.status === "Unfinished" ? (
                    <Button title="finish" backgroundColor="#7B632F" borderRadius={8} onPress={() => finishedTodo(u)} />
                  ) : (
                    <Button title="unfinish" backgroundColor="#B59B69" borderRadius={8} onPress={() => unfinishedTodo(u)} />
                  )}

                  <Button small title="remove" borderRadius={8} backgroundColor="#de0000" onPress={() => removeTodo(u.id)} />
                </View>
              </View>
            </Card>
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
  },
  btnContainer: {
    flex: 1,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default TodoList;
