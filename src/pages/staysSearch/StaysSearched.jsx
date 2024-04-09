import React from "react";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import ServicesSearch from "../../components/servicesSearch/ServicesSearch";
import { Container } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StaysSearchComponent from "../../components/staysSearchComponent/StaysSearchComponent";

const StaysSearched = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
        <StaysSearchComponent />
      </Container>
      <Footer />
    </>
  );
};

export default StaysSearched;
