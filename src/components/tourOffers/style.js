import styled from "styled-components";

export const Container = styled.div`
  color: #424244;
  margin-left: 190px;

  @media screen and (max-width: 800px) {
    margin-left: 45px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-top: 60px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: -5px;
  }
`;

export const CarouselContainer = styled.div`
  overflow-x: auto;
  display: flex;
  padding: 10px 0;
  width: 1580px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 430px;
  }
`;

export const ArrowLeft = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ArrowRight = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 1500px;
  margin-top: 10px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 0 0 auto;
`;

export const CardImg = styled.img`
  width: 380px;
  height: 475px;
  border-radius: 20px;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    border-radius: 10px;
    width: 340px;
    height: 425px;
  }
`;

export const CardTitle = styled.h1`
  font-size: 32px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const CardDetails = styled.h6`
  font-size: 24px;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const CardPrice = styled.h6`
  font-size: 24px;
  margin-top: -40px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
