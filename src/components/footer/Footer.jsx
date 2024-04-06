import React from "react";
import {
  Contact,
  Container,
  Container1,
  Container2,
  Container3,
  FollowUs,
  Icon,
  LinksTitle,
  MainText,
  MainText2,
  MainTitle,
  Paragraph,
  StyledLink,
  SubscribeNews,
} from "./style";
import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Linkedin from "../../assets/images/linkedin.png";
import { routes } from "../../constants/routes";

const Footer = () => {
  return (
    <Container>
      <Container1>
        <MainTitle>ExploreEra</MainTitle>
        <MainText>
          Travel agency which helps <br></br>you to plan your perfect <br></br>{" "}
          holidays
        </MainText>
        <FollowUs>Follow Us</FollowUs>
        <Icon src={Instagram} />
        <Icon src={Facebook} />
        <Icon src={Linkedin} />
      </Container1>
      <Container2>
        <LinksTitle>Links</LinksTitle>
        <StyledLink to={routes.home}>Home</StyledLink>
        <StyledLink>About Us</StyledLink>
        <StyledLink>Blog</StyledLink>
        <StyledLink to={routes.services}>Our Services</StyledLink>
        <StyledLink>Our Offers</StyledLink>
      </Container2>
      <Container3>
        <Contact>Contact us</Contact>
        <Paragraph>exploreera@gmail.com</Paragraph>
        <Paragraph>555111222</Paragraph>
        <SubscribeNews>Subscribe news</SubscribeNews>
      </Container3>
    </Container>
  );
};

export default Footer;
