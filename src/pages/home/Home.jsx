import React from "react";
import Header from "../../components/header/Header";
import { HomeContainer } from "./style";
import HomeIntro from "../../components/homeIntro/HomeIntro";
import DiscoverServices from "../../components/discoverServices/DiscoverServices";
import WatchTrips from "../../components/watchTrips/WatchTrips";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeIntro />
      <DiscoverServices />
      <WatchTrips />
    </HomeContainer>
  );
};

export default Home;
