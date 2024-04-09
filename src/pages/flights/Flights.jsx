import React from "react";
import { Container } from "./style";
import FlightsFilter from "../../components/flightsFilter/FlightsFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import ServicesSearch from "../../components/servicesSearch/ServicesSearch";
import FilterFlights from "../../components/filterFlights/FilterFlights";

const Flights = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
        <ServicesSearch />
        <FilterFlights />
        <FlightsFilter />
      </Container>
      <Footer />
    </>
  );
};

export default Flights;
