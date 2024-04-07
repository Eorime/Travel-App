import React from "react";
import { Container } from "./style";
import FlightsFilter from "../../components/flightsFilter/FlightsFilter";

const Flights = () => {
  return (
    <>
      <Container>
        <FlightsFilter />
      </Container>
    </>
  );
};

export default Flights;
