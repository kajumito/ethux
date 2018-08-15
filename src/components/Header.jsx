import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import StatusBar from "./header/StatusBar";

import routes from "../routes";

const StyledBar = styled(AppBar)`
  && {
    position: relative;
    background-color: ${props => props.theme.palette.elements.primary};
  }
`;

const Title = styled(Typography)`
  && {
    flex: 1;
    color: white;
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
  }
`;

const MenuLink = styled(Button)`
  && {
    color: white;
  }
`;

const Header = () => (
  <div>
    <StyledBar position="static">
      <Toolbar>
        <Title component={Link} to="/">
          Ethux
        </Title>
        {routes.map(
          route =>
            route.title && (
              <MenuLink key={route.title} component={Link} to={route.path}>
                {route.title}
              </MenuLink>
            )
        )}
      </Toolbar>
    </StyledBar>
    <StatusBar />
  </div>
);

export default Header;
