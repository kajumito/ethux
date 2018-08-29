import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({ input, label, ...custom }) => (
  <TextField label={label} {...input} {...custom} />
);

export default InputField;
