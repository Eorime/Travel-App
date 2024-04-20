import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 105px;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-in;
  color: #ffffff;
  background-color: #eae9e9;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    background-color: transparent;
  }

  @media screen and (max-width: 1500px) {
    height: 85px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 48px;
  font-family: "Kalnia", serif;
  margin-left: 170px;
  font-weight: 450;
  margin-top: 20px;
  color: #424244;

  @media screen and (max-width: 500px) {
    font-size: 24px;
    margin-left: 30px;
    color: #ffffff;
  }

  @media screen and (max-width: 1500px) {
    font-size: 32px;
    margin-left: 45px;
    color: #424244;
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

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const NavigateElementsContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  color: #424244;
  font-size: 28px;
  margin-top: -10px;
  margin-left: 940px;
  font-weight: 500;

  @media screen and (max-width: 1500px) {
    font-size: 18px;
    margin-left: 720px;
    margin-top: -8px;
    color: #424244;
  }
`;

export const NavigateElement = styled.p`
  margin-right: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UserImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 25px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1500px) {
    height: 30px;
    width: 30px;
    margin-top: 12px;
    color: #424244;
  }
`;

export const Burger = styled.div`
  display: none;
  position: fixed;
  right: 30px;
  width: 32px;
  height: 32px;
  margin-top: -150px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const BurgerImage = styled.img``;

export const BurgerMenu = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;

  @media screen and (max-width: 500px) {
    padding-left: 28px;
    position: fixed;
    right: 2.5rem;
    top: 8px;
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
  z-index: 1000;

  @media screen and (max-width: 500px) {
    margin: ;
  }
`;

export const Line = styled.div`
  @media screen and (max-width: 500px) {
    background-color: #424244;
    height: 1px;
    width: 70%;
    margin-top: 85px;
    position: absolute;
  }
`;

export const Close = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 100px;
  position: absolute;
`;
