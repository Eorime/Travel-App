import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 170px;
  position: fixed;
`;

export const HeaderTitle = styled.h1`
  font-family: "Kalnia", serif;
  font-weight: 500;
  font-size: 48px;
  margin-top: 20px;
  color: #ffffff;
`;

export const NavigationContainer = styled.div`
  display: flex;
  margin-left: 450px;
  margin-right: 170px;
`;

export const NavigateElement = styled.p`
  font-weight: 300;
  margin-left: 40px;
  font-size: 28px;
  color: #ffffff;
  margin-top: 36px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const UserImage = styled.img`
  margin-left: 40px;
  width: 25px;
  height: 30px;
  margin-top: 37.5px;
`;
