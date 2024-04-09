import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ServiceFilter from "../../components/serviceFilter/ServiceFilter";
import SearchedBy from "../../components/searchedBy/SearchedBy";

const StaysDetails = () => {
  return (
    <>
      <Header />
      <ServiceFilter />
      <SearchedBy />
      <Footer />
    </>
  );
};

export default StaysDetails;
