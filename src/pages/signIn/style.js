import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 540px;
  height: 600px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 230px;
  border-radius: 10px;
  margin-bottom: 130px;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 540px;
    justify-content: center;
    margin-top: 110px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  position: relative;
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

export const IconContainer = styled.div`
  display: flex;
  display-direction: row;
  position: absolute;
  margin-top: 390px;
  margin-left: 45px;

  @media screen and (max-width: 800px) {
    margin-left: 25px;
    margin-top: 380px;
  }
`;

export const Icon = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 42px;

  @media screen and (max-width: 800px) {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
`;
