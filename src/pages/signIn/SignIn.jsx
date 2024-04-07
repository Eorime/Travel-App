import React, { useState } from "react";
import { useAuthentification } from "../../context/AuthentificationProvider";
import { useNavigate } from "react-router-dom";
import {
  And,
  Container,
  ContinueWith,
  ContinueWithContainer,
  Form,
  Icon,
  IconContainer,
  Input,
  Label,
  Line,
  LongLine,
  SubmitButton,
  Terms,
  TermsContainer,
} from "./style";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FB from "../../assets/images/fb.png";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import Mail from "../../assets/images/mail.png";

const SignIn = () => {
  const { signIn } = useAuthentification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const successful = signIn(email, password);
    if (successful) {
      navigate("/services");
    } else {
      setError("Couldn't find the provided email or password");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <SubmitButton type="submit">Continue</SubmitButton>
          {error && <div>{error}</div>}
        </Form>
        <ContinueWithContainer>
          <Line />
          <ContinueWith>Or continue with</ContinueWith>
          <Line />
        </ContinueWithContainer>
        <IconContainer>
          <Icon src={FB} />
          <Icon src={Apple} />
          <Icon src={Google} />
          <Icon src={Mail} />
        </IconContainer>
        <LongLine />
        <TermsContainer>
          <Terms>
            By signing in or creating an account, you agree with our <br></br>
            <And>Terms & conditions</And> and <And>Privacy policy</And>
          </Terms>
        </TermsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
