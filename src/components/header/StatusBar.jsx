import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import NetworkStatus from "./statusBar/NetworkStatus";

const GridContainer = styled(Grid).attrs({
  container: true
})`
  && {
    padding: 10px 25px;
    background: #f6f6f6;
  }
`;

const StatusBar = props => {
  const { isInitialized } = props;
  return (
    <GridContainer>
      {isInitialized === 1 ? (
        <NetworkStatus isOnline />
      ) : (
        <NetworkStatus isOnline={false} />
      )}
    </GridContainer>
  );
};

const mapStateToProps = state => ({
  isInitialized: state.web3.initialized
});

export default connect(mapStateToProps)(StatusBar);
