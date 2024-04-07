import React from "react";
import { Container } from "./style";
import Header from "../../components/header/Header";
import ServiceSearch from "../../components/serviceSearch/ServiceSearch";
import Footer from "../../components/footer/Footer";

const Stays = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceSearch />
      </Container>
      <Footer />
    </>
  );
};

export default Stays;
