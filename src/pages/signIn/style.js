import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 490px;
  width: 540px;
  height: 555px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 230px;
  border-radius: 10px;
  margin-bottom: 130px;

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 490px;
    justify-content: center;
  }
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

  @media screen and (max-width: 800px) {
    width: 280px;
    height: 50px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
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

  @media screen and (max-width: 800px) {
    width: 310px;
    height: 50px;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: #424244;
  opacity: 70%;
  margin-left: 40px;
  margin-top: 2px;
  margin-bottom: -5px;
`;
