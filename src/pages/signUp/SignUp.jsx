import React, { useState } from "react";
import { useAuthentification } from "../../context/AuthentificationProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuthentification();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      await signUp(firstName, lastName, email, password);
      navigate("/signin");
    } catch (error) {
      setError("There was an error, please try again");
    }
  };

  return (
    <form onSubmit={handleSubmitButton}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <input
        type="password"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        placeholder="Re-enter Password"
      />
      <button type="submit">Sign Up</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default SignUp;
