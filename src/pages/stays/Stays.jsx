import React from "react";
import { Container } from "./style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import StaysSearch from "../../components/staysSearch/StaysSearch";

const Stays = () => {
  return (
    <>
      <Header />
      <Container>
        <ServiceFilter />
        <StaysSearch />
      </Container>
      <Footer />
    </>
  );
};

export default Stays;
