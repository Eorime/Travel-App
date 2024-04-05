import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 540px;
  height: 972px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 230px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 35px;
`;

export const Input = styled.input`
  margin: 20px;
  width: 400px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  color: #424244;
  border: solid 1px #ff6700;
  padding-left: 20px;

  &: focus {
    outline: none;
    border: solid 1px #c85100;
  }
`;

export const SignUpButton = styled.button`
  background-color: #ff6700;
  font-size: 20px;
  color: #ffffff;
  width: 430px;
  height: 60px;
  border: none;
  border-radius: 10px;
  align-self: center;
  margin-top: 20px;
  padding-left: 20px;

  &: hover {
    cursor: pointer;
    background-color: #c85100;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #424244;
  opacity: 70%;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: -5px;
`;
