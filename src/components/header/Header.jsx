import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  NavigateElement,
  NavigationContainer,
  StyledLink,
  UserImage,
} from "./style";
import { routes } from "../../constants/routes";
import VectorImage from "../../assets/images/Vector.png";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to={routes.home}>
        <HeaderTitle>ExploreEra</HeaderTitle>
      </StyledLink>
      <NavigationContainer>
        <StyledLink to={routes.home}>
          <NavigateElement>Home</NavigateElement>
        </StyledLink>
        <StyledLink>
          <NavigateElement>About Us</NavigateElement>
        </StyledLink>
        <StyledLink>
          <NavigateElement>Blogs</NavigateElement>
        </StyledLink>
        <StyledLink to={routes.services}>
          <NavigateElement>Our Services</NavigateElement>
        </StyledLink>
        <StyledLink>
          <NavigateElement>Our Offers</NavigateElement>
        </StyledLink>
        <StyledLink>
          <UserImage src={VectorImage}></UserImage>
        </StyledLink>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
