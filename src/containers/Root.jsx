import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "../state/configureStore";
import mainTheme from "../styles/themes";
import globalStyles from "../styles/globalStyles";

import App from "./App";

const Root = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default Root;
