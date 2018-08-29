import React, { Component } from "react";

import styled from "styled-components";

const Icon = styled.div`
  width: 30px;
  height: 23px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2),
  span:nth-child(3) {
    top: 10px;
  }
  span:nth-child(4) {
    top: 20px;
  }

  &.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;

const Tick = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #ffffff;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
`;

class NavIcon extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
    console.log(this.state.open);
  };

  render() {
    return (
      <Icon
        onClick={this.handleClick}
        className={this.state.open ? "open" : "closed"}
      >
        <Tick />
        <Tick />
        <Tick />
        <Tick />
      </Icon>
    );
  }
}

export default NavIcon;
