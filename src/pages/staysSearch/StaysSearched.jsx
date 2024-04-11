import React from "react";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import ServicesSearch from "../../components/servicesSearch/ServicesSearch";
import { Container } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StaysSearchComponent from "../../components/staysSearchComponent/StaysSearchComponent";
import StaysFilter from "../../components/staysFilter/StaysFilter";
import StayList from "../../components/stayList/StayList";

const StaysSearched = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
        <StaysSearchComponent />
        <StaysFilter />
        <StayList />
      </Container>
      <Footer />
    </>
  );
};

export default StaysSearched;
