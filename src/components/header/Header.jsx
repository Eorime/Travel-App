import React from "react";
import {
  Burger,
  BurgerImage,
  BurgerMenu,
  HeaderContainer,
  HeaderTitle,
  MenuItem,
  NavigateElement,
  NavigationContainer,
  StyledLink,
  UserImage,
} from "./style";
import { routes } from "../../constants/routes";
import VectorImage from "../../assets/images/Vector.png";
import BurgerImg from "../../assets/images/burger.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>ExploreEra</HeaderTitle>
      <NavigationContainer>
        <Burger>
          <BurgerImage src={BurgerImg} />
        </Burger>
        <BurgerMenu>
          <StyledLink to={routes.signIn}>
            <MenuItem>Sign In</MenuItem>
          </StyledLink>
          <StyledLink to={routes.signUp}>
            <MenuItem>Sign Up</MenuItem>
          </StyledLink>
          <StyledLink to={routes.home}>
            <MenuItem>Home</MenuItem>
          </StyledLink>
          <StyledLink>
            <MenuItem>About Us</MenuItem>
          </StyledLink>
          <StyledLink>
            <MenuItem>Blogs</MenuItem>
          </StyledLink>
          <StyledLink to={routes.services}>
            <MenuItem>Our Services</MenuItem>
          </StyledLink>
          <StyledLink>
            <MenuItem>Our Offers</MenuItem>
          </StyledLink>
        </BurgerMenu>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
