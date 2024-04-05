import React from "react";
import Header from "../../components/header/Header";
import { HomeContainer } from "./style";
import HomeIntro from "../../components/homeIntro/HomeIntro";
import Discover from "../../components/discover/Discover";
import DiscoverServices from "../../components/discoverServices/DiscoverServices";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeIntro />
      <DiscoverServices />
    </HomeContainer>
  );
};

export default Home;
