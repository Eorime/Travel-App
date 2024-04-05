import styled from "styled-components";

export const Container = styled.div`
  margin-top: 945px;
  display: flex;
  align-items: center;
  margin-left: 170px;
  margin-right: 170px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  color: #424244;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

export const TheMainParagraph = styled.p`
  font-size: 20px;
  color: #424244;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ElementContainer = styled.div`
  margin-left: 20px;
`;

export const ImageContainer = styled.img`
  width: 380px;
  height: 250px;

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 220px;
  }
`;

export const ParagraphTitle = styled.p`
  font-size: 32px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #424244;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    left: 0px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  color: #424244;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin-top: 0px;
  }
`;
