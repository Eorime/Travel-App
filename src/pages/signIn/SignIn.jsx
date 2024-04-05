import React, { useState } from "react";
import { useAuthentification } from "../../context/AuthentificationProvider";
import { useNavigate } from "react-router-dom";
import { Container, Form, Input, Label, SubmitButton } from "./style";

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
      navigate("/");
    } else {
      setError("Couldn't find the provided email or password");
    }
  };

  return (
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
    </Container>
  );
};

export default SignIn;
