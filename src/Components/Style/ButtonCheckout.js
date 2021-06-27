import styled from "styled-components";

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-family: inherit;
  background-color: #299b01;
  color: #ffffff;
  border-color: transparent;
  cursor: pointer;
  transition-property: color, border-color, background-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #ffffff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    background-color: #dddddd;
    color: #bbbbbb;
    border-color: #aaaaaa;
  }
`;
