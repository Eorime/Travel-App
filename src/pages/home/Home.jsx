import React from "react";
import Header from "../../components/header/Header";
import {
  BackgroundImage,
  HomeContainer,
  HomeIntroContainer,
  MainParagraph,
  OfferButton,
  SecondaryParagraph,
} from "./style";
import Background from "../../assets/images/image 1.png";

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={Background} />
      <Header />
      <HomeIntroContainer>
        <SecondaryParagraph>Visit Mountains In </SecondaryParagraph>
        <MainParagraph>ITALY</MainParagraph>
        <OfferButton>See Offer</OfferButton>
      </HomeIntroContainer>
    </HomeContainer>
  );
};

export default Home;
