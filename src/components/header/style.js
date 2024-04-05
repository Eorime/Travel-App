import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
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
`;

export const BurgerImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const BurgerMenu = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const MenuItem = styled.li`
  padding: 1rem;
  font-weight: 500;
`;
