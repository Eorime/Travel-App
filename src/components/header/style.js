import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 60; //105
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-in;
  color: #ffffff;
  @media screen and (max-width: 1920px) {
    max-width: 100%;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-family: "Kalnia", serif;
  margin-left: 2.5rem;
  font-weight: 450;

  @media screen and (max-width: 1920px) {
    font-size: 24px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
  margin: auto;
  height: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 1920px) {
    max-width: 100%;
  }
`;

export const NavigateElement = styled.p``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UserImage = styled.img``;

export const Burger = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  width: 32px;
  height: 32px;
  @media screen and (max-width: 1920px) {
    display: block;
  }
`;

export const BurgerImage = styled.img``;

export const BurgerMenu = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;

  @media screen and (max-width: 1920px) {
    padding-left: 28px;
    position: fixed;
    right: 2.5rem;
    top: 0.555rem;
    flex-direction: column;
    background-color: #ffffff;
    color: #424244;
    width: 184px;
    height: 271px;
    z-index: 999;
    border-radius: 8px;
    transition: 0.3s;
    right: ${(props) => (props.active ? "0" : "-200%")};
    &: active {
      right: 0;
    }
  }
`;

export const MenuItem = styled.li`
  padding: 5px;
  font-weight: 500;
  font-size: 18px;
  margin-right: 40px;
  color: #424244;

  @media screen and (max-width: 1920px) {
    margin: ;
  }
`;

export const Close = styled.img`
  width: 18px;
  height: 18px;
  z-index: 1000;
`;
