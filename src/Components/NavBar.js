import React from "react";
import styled from "styled-components";
import logoImg from "../image/logo.svg";
import signImg from "../image/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const ButtonSign = styled.div`
  justify-content: center;
`;
const Button = styled.button`
  color: white;
  border-color: transparent;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
`;

const SignImg = styled.img`
  width: 32px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald’s</H1>
    </Logo>
    <ButtonSign>
      <SignImg src={signImg} alt="sign" />
      <Button>войти</Button>
    </ButtonSign>
  </NavBarStyled>
);
