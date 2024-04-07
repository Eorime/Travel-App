import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container } from "./style";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";

const Services = () => {
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

export default Services;
