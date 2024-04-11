import React from "react";
import { AuthElement, Container, Line, StyledLink } from "./style";
import { routes } from "../../constants/routes";
import { useAuthentification } from "../../context/AuthentificationProvider";

const AuthComponent = () => {
  const { signOut } = useAuthentification();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Container>
      <StyledLink to={routes.signIn}>
        <AuthElement>Sign in</AuthElement>
      </StyledLink>
      <StyledLink to={routes.signUp}>
        <Line />
        <AuthElement>Sign up</AuthElement>
      </StyledLink>
      <StyledLink onClick={handleSignOut} to={routes.home}>
        <Line />
        <AuthElement>Sign out</AuthElement>
      </StyledLink>
    </Container>
  );
};

export default AuthComponent;
