import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes";
import globalStyles from "../styles/globalStyles";

import App from "./App";

const Root = () => (
  <Router>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Router>
);

export default Root;
