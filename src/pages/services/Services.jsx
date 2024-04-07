import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container } from "./style";
import ServiceSearch from "../../components/serviceSearch/ServiceSearch";

const Services = () => {
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

export default Services;
