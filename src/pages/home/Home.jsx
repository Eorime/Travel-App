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
import HomeIntro from "../../components/homeIntro/HomeIntro";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeIntro />
    </HomeContainer>
  );
};

export default Home;
