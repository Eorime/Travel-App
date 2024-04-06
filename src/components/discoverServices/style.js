import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: start;
  margin-left: 170px;
  margin-right: 170px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 40px;
  color: #424244;
  margin-top: 700px;
  margin-left: 190px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: 10px;
    margin-left: 45px;
  }
`;

export const TheMainParagraph = styled.p`
  font-size: 20px;
  color: #424244;
  margin-left: 190px;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-left: 45px;
    margin-top: 15px;
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
