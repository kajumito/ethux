import React from "react";
import { Field, reduxForm } from "redux-form";

import styled from "styled-components";
import Button from "@material-ui/core/Button";

import InputField from "../../../../components/InputField";

const Form = styled.form``;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  && {
    float: right;
    margin-top: ${props => `${props.theme.spacing.unit * 2}px`};
    background: ${props => props.theme.palette.elements.primary};
    color: white;
    &:hover {
      background: ${props => props.theme.palette.elements.dark};
    }
  }
`;

const VoucherForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FieldContainer>
        <Field
          name="address"
          component={InputField}
          label="Receiever address"
          placeholder="0x5f1d6a93bb8474eddad70ed28c18c625027a9940"
          type="text"
        />
        <Field
          name="amount"
          component={InputField}
          label="Token amount"
          placeholder="9301"
          type="text"
        />
        <SubmitButton type="submit">Send Transaction</SubmitButton>
      </FieldContainer>
    </Form>
  );
};

export default reduxForm({
  form: "createVoucher"
})(VoucherForm);
