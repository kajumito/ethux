import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const GridItem = styled(Grid).attrs({
  xs: 6,
  item: true
})`
  && {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

const StatusLabel = styled(Typography)`
  && {
  }
`;

const AccountStatus = props => (
  <GridItem>
    <StatusLabel>{props.userdata.name}</StatusLabel>
  </GridItem>
);

export default AccountStatus;
