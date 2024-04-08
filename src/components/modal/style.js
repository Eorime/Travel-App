import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 930px;
  height: auto;
  text-align: center;
  white-space: wrap;
  color: #424244;
  border-radius: 15px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 50px;
  z-index: 1000;

  @media screen and (max-width: 800px) {
    height: 450px;
    width: 340px;
    margin-top: 50px;
    position: relative;
    white-space: nowrap;
    max-width: 90%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Title = styled.h1`
  padding-top: 50px;
  font-size: 32px;
  font-weight: 500;
  margin-left: 60px;
  margin-right: 60px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-left: 60px;
  margin-right: 60px;
  line-height: 1.5;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const AgreeButton = styled.button`
  font-size: 20px;
  color: #ffffff;
  background-color: #ff6700;
  width: 350px;
  margin-top: 40px;
  height: 50px;
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: #c85100;
  }

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 250px;
  }
`;
