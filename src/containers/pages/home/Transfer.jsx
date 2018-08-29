import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import TransferForm from "./transfer/TransferForm";

import { tokenThunks } from "../../../state/modules/token";

const Container = styled.div`
  width: 100%;
`;

const Title = styled(Typography).attrs({ variant: "title" })`
  && {
    color: ${props => props.theme.palette.textDark};
    margin-bottom: ${props => `${props.theme.spacing.unit * 2}px`};
  }
`;

const Transfer = props => {
  const { sendTokens } = props;
  const submit = values => {
    props.sendTokens(values.address, values.amount);
  };
  return (
    <Container>
      <Title>Transfer</Title>
      <TransferForm onSubmit={submit} sendTokens={sendTokens} />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  sendTokens(address, value) {
    dispatch(tokenThunks.sendTokens(address, value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Transfer);
