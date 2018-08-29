import React, { Component } from "react";

import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { media } from "../styles/styleUtils";

import MobileNavbar from "./nav/MobileNavbar";
import NavLinks from "./nav/NavLinks";
import Logo from "./nav/Logo";

const Wrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 80px;
`;

const NormalNavbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 50px;
  ${media.md`display: none;`};
`;

const Nav = () => (
  <Wrapper>
    <NormalNavbar>
      <Logo>SushiPlace</Logo>
      <NavLinks />
    </NormalNavbar>
    <MobileNavbar />
  </Wrapper>
);

export default Nav;
