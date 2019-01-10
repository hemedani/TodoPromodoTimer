import React from "react";
import { Modal, View, StyleSheet, Alert } from "react-native";
import { Formik, Field } from "formik";
import { Button } from "react-native-elements";
import CustomInp from "../../utils/CustomInp";

const AddTodo = ({ addModalVisibilty, toggleAddTodoModal }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={addModalVisibilty}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
    }}
  >
    <View style={styles.container}>
      <Formik
        onSubmit={({ title, description }) => {
          Alert.alert(`firstName: ${title}`, `firstName: ${description}`);
        }}
        render={({ handleSubmit }) => (
          <View>
            <Field component={CustomInp} name="title" />
            <Field component={CustomInp} name="description" />
            <Button raised icon={{ name: "add" }} title="Add Todo" onPress={handleSubmit} />
          </View>
        )}
      />

      <Button raised icon={{ name: "close" }} title="Close Modal" onPress={toggleAddTodoModal} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 22
  }
});

export default AddTodo;
