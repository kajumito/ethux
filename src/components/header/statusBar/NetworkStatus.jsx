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
  }
`;

const StatusLabel = styled(Typography)`
  && {
    margin-left: 10px;
  }
`;

const StatusIndicator = styled.div`
  height: 0.875rem;
  width: 0.875rem;
  background: ${props => (props.online ? "#2ecc71" : "#e74c3c")}
  border-radius: 50%;
`;

const NetworkStatus = props =>
  props.isOnline ? (
    <GridItem>
      <StatusIndicator online />
      <StatusLabel>Status: Online</StatusLabel>
    </GridItem>
  ) : (
    <GridItem>
      <StatusIndicator />
      <StatusLabel>Status: Offline</StatusLabel>
    </GridItem>
  );

export default NetworkStatus;
