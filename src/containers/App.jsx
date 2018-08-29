import React, { Component } from "react";

import { Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import routes from "../routes";
import RouteWithSubRoutes from "../utils/RouteWithSubRoutes";

const App = props => {
  console.log(props);
  return (
    <div>
      <Switch>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </Switch>
    </div>
  );
};

export default App;
