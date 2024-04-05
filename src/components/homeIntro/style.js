import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 220px;
  position: relative;

  &: before {
    content: "";
    background-image: url(${require("../../assets/images/image1.png")});
    position: absolute;
    height: 885px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  position: absolute;
  margin-top: 230px;
  text-align: center;
  color: #ffffff;
  left: 800px;
  font-weight: 300;

  @media screen and (max-width: 800px) {
    margin-top: 45px;
    position-absolute;
    left: 160px;
  }
`;

export const MainText = styled.h1`
  margin-top: -14px;
  font-size: 64px;
  font-weight: 500;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const SecondaryText = styled.p`
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const OfferButton = styled.button`
  font-size: 24px;
  background-color: #ff6700;
  color: #ffffff;
  width: 180px;
  height: 70px;
  margin-top: -5px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-radius: 20px;
  border: none;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    width: 105px;
    height: 35px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 10px;
  }
`;
