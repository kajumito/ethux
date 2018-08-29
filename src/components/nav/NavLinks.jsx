import React, { Component } from "react";

import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { media } from "../../styles/styleUtils";

const Wrapper = styled.div`
  display: flex;
  color: #eee;
  justify-content: space-between;
`;

const NavLink = styled.a`
  margin-left: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
`;

const NavLinks = () => (
  <Wrapper>
    <NavLink href="#">Etusivu</NavLink>
    <NavLink href="#">Menu</NavLink>
    <NavLink href="#">Varaukset</NavLink>
    <NavLink href="#">Ota Yhteyttä</NavLink>
  </Wrapper>
);

export default NavLinks;
