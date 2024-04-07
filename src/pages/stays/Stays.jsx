import React from "react";
import { Container } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";

const Stays = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
      </Container>
      <Footer />
    </>
  );
};

export default Stays;
