import styled from "styled-components";

const Button = styled.button`
  border: 3px solid #fff;
  background: none;
  cursor: pointer;
  color: #fff;
  padding: 10px 30px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }
  :hover,
  :active {
    color: #333333;
    background: #fff;
  }
`;

export default Button;
