import styled from "styled-components";

export const Container = styled.div`
  margin-left: 190px;
  color: #424244;

  @media screen and (max-width: 800px) {
    margin-left: 45px;
  }
`;

export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 1580px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: 10px;
  }
`;

export const Blog = styled.div``;

export const BlogImage = styled.img`
  width: 514px;
  height: 342px;
  border-radius: 20px;

  @media screen and (max-width: 800px) {
    width: 340px;
    height: 227px;
    border-radius: 10px;
  }
`;

export const BlogText = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;
