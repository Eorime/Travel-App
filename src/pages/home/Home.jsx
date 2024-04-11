import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { HomeContainer } from "./style";
import HomeIntro from "../../components/homeIntro/HomeIntro";
import DiscoverServices from "../../components/discoverServices/DiscoverServices";
import WatchTrips from "../../components/watchTrips/WatchTrips";
import TourOffers from "../../components/tourOffers/TourOffers";
import Blogs from "../../components/blogs/Blogs";
import Book from "../../components/book/Book";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeIntro />
      <DiscoverServices />
      <WatchTrips />
      <TourOffers />
      <Blogs />
      <Book />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
