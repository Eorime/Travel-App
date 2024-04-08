import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 540px;
  height: 1035px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 150px;
  border-radius: 10px;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 850px;
    height: 1000px;
    margin-top: 110px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
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

export const IconContainer = styled.div`
  display: flex;
  display-direction: row;
  position: absolute;
  margin-top: 830px;
  margin-left: 45px;

  @media screen and (max-width: 800px) {
    margin-left: 25px;
    margin-top: 750px;
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

export const ContinueWithContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-top: 775px;

  @media screen and (max-width: 800px) {
    margin-top: 715px;
  }
`;

export const Line = styled.div`
  background-color: #42424470;
  width: 122px;
  margin-left: 30px;
  margin-right: 30px;
  height: 1px;
  margin-top: 22px;

  @media screen and (max-width: 800px) {
    width: 75px;
    margin-right: 25px;
    margin-left: 25px;
    margin-top: 15px;
  }
`;

export const ContinueWith = styled.p`
  color: #42424470;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    font-size: 14px;
    margin-top: 7px;
  }
`;

export const LongLine = styled.div`
  background-color: #42424470;
  width: 434px;
  height: 1px;
  margin-top: 930px;
  position: absolute;

  @media screen and (max-width: 800px) {
    width: 280px;
    margin-top: 835px;
  }
`;

export const TermsContainer = styled.div`
  position: absolute;
  margin-top: 935px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-top: 840px;
  }
`;

export const Terms = styled.p`
  color: #42424470;
  font-size: 16px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const And = styled.span`
  color: #c85100;

  &: hover {
    cursor: pointer;
  }
`;
