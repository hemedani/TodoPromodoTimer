import React from "react";
import { Modal, View, StyleSheet, Alert } from "react-native";
import { Formik, Field } from "formik";
import { Button, Header } from "react-native-elements";
import CustomInp from "../../utils/CustomInp";

const AddTodo = ({ addModalVisibilty, toggleAddTodoModal, addTodo }) => (
  <Modal animationType="slide" transparent={false} visible={addModalVisibilty}>
    <Header centerComponent={{ text: "Adding a Todo", style: { color: "#fff" } }} />
    <View>
      <Formik
        onSubmit={({ title, description }) => {
          addTodo({ title, description });
          toggleAddTodoModal();
        }}
        render={({ handleSubmit }) => (
          <View>
            <Field component={CustomInp} name="title" />
            <Field component={CustomInp} name="description" />
            <View style={styles.btnContainer}>
              <Button
                title="Add Todo"
                raised
                borderRadius={8}
                icon={{ name: "add" }}
                backgroundColor="#00BB5E"
                onPress={handleSubmit}
              />
              <Button
                title="Close Modal"
                raised
                borderRadius={8}
                icon={{ name: "close" }}
                backgroundColor="#E5000F"
                onPress={toggleAddTodoModal}
              />
            </View>
          </View>
        )}
      />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default AddTodo;
