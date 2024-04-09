import React from "react";
import { CheapestContainer, Container, Line, Line2, Paragraph } from "./style";

const FilterFlights = () => {
  return (
    <Container>
      <CheapestContainer>
        <Paragraph>Cheapest</Paragraph>
        <Line></Line>
        <Paragraph>Quickest</Paragraph>
        <Line2></Line2>
        <Paragraph>Best</Paragraph>
      </CheapestContainer>
    </Container>
  );
};

export default FilterFlights;
