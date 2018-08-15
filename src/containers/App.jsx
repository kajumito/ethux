import React, { Component } from "react";

import { connect } from "react-redux";
import { Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import routes from "../routes";

import { web3Thunks } from "../state/modules/web3";

import RouteWithSubRoutes from "../utils/RouteWithSubRoutes";
import Header from "../components/Header";
import Loader from "../components/Loading";
import { sendTokens } from "../state/modules/token/thunks";

const GridWrapper = styled.div`
  margin: 25px;
`;

class App extends Component {
  componentWillMount() {
    this.props.loadWeb3();
  }

  render() {
    const { isInitialized } = this.props;
    return isInitialized ? (
      <div>
        <Header />
        <GridWrapper>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </GridWrapper>
      </div>
    ) : (
      <Loader loadObject="Web3" />
    );
  }
}

App.propTypes = {
  isInitialized: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  isInitialized: state.web3.initialized
});

const mapDispatchToProps = dispatch => ({
  loadWeb3() {
    dispatch(web3Thunks.loadWeb3());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
