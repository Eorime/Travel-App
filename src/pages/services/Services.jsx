import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container } from "./style";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import ServicesSearch from "../../components/servicesSearch/ServicesSearch";

const Services = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
        <ServicesSearch />
      </Container>
      <Footer />
    </>
  );
};

export default Services;
