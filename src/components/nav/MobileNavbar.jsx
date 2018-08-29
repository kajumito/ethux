import React, { Component } from "react";

import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { media } from "../../styles/styleUtils";

import NavLinks from "./NavLinks";
import Logo from "./Logo";
import NavIcon from "./NavIcon";

const Wrapper = styled.div`
  display: none;
  width: 100%;
  margin: 0 50px;
  ${media.md`display: flex;`};
  align-items: center;
`;

const Nav = () => (
  <Wrapper>
    <Logo>SushiPlace</Logo>
    <NavIcon />
  </Wrapper>
);

export default Nav;
