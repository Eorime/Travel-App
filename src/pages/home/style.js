import styled from "styled-components";

export const HomeContainer = styled.div``;

export const BackgroundImage = styled.img``;

export const HomeIntroContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 348px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
`;

export const MainParagraph = styled.p`
  font-weight: 500;
  font-size: 64px;
  margin-bottom: 10px;
  margin-top: 10px;
  letter-spacing: 8px;
`;

export const SecondaryParagraph = styled.p`
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const OfferButton = styled.button`
  border: none;
  background-color: #ff6700;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 20px;

  &: hover {
    cursor: pointer;
    background-color: #c85100;
  }
`;
