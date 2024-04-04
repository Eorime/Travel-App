import React from "react";
import Header from "../../components/header/Header";
import { BackgroundImage, HomeContainer } from "./style";
import Background from "../../assets/images/image 1.png";

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundImage src={Background} />
      <Header />
    </HomeContainer>
  );
};

export default Home;
