import React from "react";
import {
  AirlineName,
  Container,
  Flight,
  FlightHours,
  FlightLanding,
  FlightLogo,
  FlightPrice,
  FlightTakeOff,
  FlightsContainer,
  SeeMoreButton,
} from "./style";
import { flightsData } from "../../data/flightsData/data";

const FlightsFilter = () => {
  const showMore = () => {};
  return (
    <Container>
      <FlightsContainer>
        {flightsData.map((flight, index) => (
          <Flight key={index}>
            <FlightLogo src={flight.img} />
            <AirlineName>{flight.airlinesName}</AirlineName>
            <FlightTakeOff>Take off {flight.takeOff}</FlightTakeOff>
            <FlightLanding>Landing {flight.landing}</FlightLanding>
            <FlightHours>{flight.hours}</FlightHours>
            <FlightPrice>{flight.price}</FlightPrice>
          </Flight>
        ))}
      </FlightsContainer>
      <SeeMoreButton onClick={showMore}>Show more results</SeeMoreButton>
    </Container>
  );
};

export default FlightsFilter;
