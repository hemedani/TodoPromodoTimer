import { PropTypes } from "prop-types";
import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

const CustomInp = ({ field: { name, onBlur, onChange, value }, form: { errors, touched } }) => (
  <View>
    <FormLabel>{name}</FormLabel>
    <FormInput onChangeText={onChange(name)} onBlur={onBlur(name)} value={value} />
    {errors[name] && touched[name] && <FormValidationMessage>Error {errors[name]}</FormValidationMessage>}
  </View>
);

CustomInp.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired
  }).isRequired
};

export default CustomInp;
