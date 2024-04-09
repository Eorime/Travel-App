import React, { useState } from "react";
import {
  Burger,
  BurgerImage,
  BurgerMenu,
  Close,
  HeaderContainer,
  HeaderTitle,
  Line,
  MenuItem,
  NavigateElement,
  NavigationContainer,
  StyledLink,
  UserImage,
} from "./style";
import { routes } from "../../constants/routes";
import BurgerImg from "../../assets/images/burger.png";
import CloseImage from "../../assets/images/close.png";
import User from "../../assets/images/Vector.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const clickHandle = () => setClick(!click);

  return (
    <HeaderContainer>
      <StyledLink to={routes.home}>
        <HeaderTitle>ExploreEra</HeaderTitle>
      </StyledLink>
      <NavigationContainer>
        <Burger onClick={clickHandle}>
          {click ? (
            <Close src={CloseImage} style={{ zIndex: "1500" }} />
          ) : (
            <BurgerImage src={BurgerImg} />
          )}
        </Burger>
        {click ? (
          <BurgerMenu active={click}>
            <StyledLink style={{ marginTop: "10px" }} to={routes.signIn}>
              <MenuItem>Sign In</MenuItem>
            </StyledLink>
            <StyledLink to={routes.signUp}>
              <MenuItem>Sign Up</MenuItem>
              <br></br>
            </StyledLink>
            <Line />
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
              <MenuItem style={{ marginBottom: "35px" }}>Our Offers</MenuItem>
            </StyledLink>
          </BurgerMenu>
        ) : (
          <BurgerMenu></BurgerMenu>
        )}
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
