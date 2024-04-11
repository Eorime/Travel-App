import React from "react";
import { AuthElement, Container, Line, StyledLink } from "./style";
import { routes } from "../../constants/routes";

const AuthComponent = () => {
  return (
    <Container>
      <StyledLink to={routes.signIn}>
        <AuthElement>Sign in</AuthElement>
      </StyledLink>
      <StyledLink to={routes.signUp}>
        <Line />
        <AuthElement>Sign up</AuthElement>
      </StyledLink>
      <StyledLink to={routes.home}>
        <Line />
        <AuthElement>Sign out</AuthElement>
      </StyledLink>{" "}
    </Container>
  );
};

export default AuthComponent;
