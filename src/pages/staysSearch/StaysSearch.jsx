import React from "react";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import ServicesSearch from "../../components/servicesSearch/ServicesSearch";
import { Container } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const StaysSearch = () => {
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

export default StaysSearch;
