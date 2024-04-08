import { Link } from "react-router-dom";
import styled from "styled-components";
import Plane from "../../assets/images/paperplane.png";

export const Container = styled.div`
  width: 100%;
  height: 435px;
  display: flex;
  display-direction: row;
  background-color: #eae9e9;
  margin-top: 70px;
  color: #424244;

  @media screen and (max-width: 800px) {
    height: 880px;
  }
`;

export const Container1 = styled.div`
  margin-left: 190px;
  margin-top: 10px;
  font-weight: 450;

  @media screen and (max-width: 800px) {
    margin-left: 74px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-family: "Kalnia", serif;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

export const MainText = styled.p`
  font-size: 24px;
  margin-top: -10px;
  display: block;
  white-space: nowrap;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    display: flex;
    flex-direction: row;
  }
`;

export const FollowUs = styled.p`
  font-size: 32px;
  margin-top: -2px;
  margin-bottom: 0px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    height: 32px;
    width: 32px;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-weight: 400;
  margin-left: 455px;

  @media screen and (max-width: 800px) {
    margin-left: -230px;
    margin-top: 300px;
  }
`;

export const LinksTitle = styled.p`
  font-size: 32px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
    margin-bottom: 5px;
    margin-top: -30px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 24px;
  margin-top: 15px;
  white-space: nowrap;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 2px;
  }
`;

export const Container3 = styled.div`
  margin-left: 450px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    margin-left: -115px;
    margin-top: 500px;
  }
`;

export const Contact = styled.p`
  font-size: 32px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 1px;
  }
`;

export const SubscribeNews = styled.p`
  font-size: 32px;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 28px;
    margin-top: 10px;
  }
`;

export const ContactMail = styled.input`
  border-radius: 10px;
  border: 1px solid #424244;
  background-image: url(${Plane});
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: 200px center;
  padding-left: 20px;
  font-size: 18px;
  color: #424244;
  height: 50px;
  outline: none;
  width: 225px;
  background-color: transparent;
  margin-top: 270px;
  margin-left: -245px;

  @media screen and (max-width: 800px) {
    margin-top: 690px;
    width: 220x;
    height: 54px;
    margin-left: -210px;
  }
`;

export const EmailField = styled.input``;

export const Copyright = styled.p`
  font-size: 24px;
  margin-top: 380px;
  margin-left: -850px;

  @media screen and (max-width: 800px) {
    margin-top: 800px;
    margin-left: -180px;
  }
`;
