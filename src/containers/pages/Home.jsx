import React, { Component } from "react";

import styled from "styled-components";

import { Flex, Box } from "grid-styled";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Root = styled(Flex)`
  flex-direction: column;
  background-image: url("./assets/img/bg-sushi.png");
  background-position: center;
  background-size: cover;
`;

const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 86px;
  line-height: 96px;
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 15px;
`;

const Banner = styled(Flex)`
  padding: 100px 0;
`;

const Home = () => (
  <Root>
    <Header />
    <Banner
      color="#eee"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Title fontWeight="bold">Tervetuloa</Title>
      <SubTitle>Sushi ravintola keskellä kaupunkia</SubTitle>

      <Button>Varaa pöytä</Button>
    </Banner>
  </Root>
);

export default Home;
