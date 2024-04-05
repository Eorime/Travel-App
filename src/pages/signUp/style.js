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

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 850px;
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

export const ImageUploadIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-left: -20px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

export const UploadedImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;
