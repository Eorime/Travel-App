import React, { useState } from "react";
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
  const [showFlights, setShowFlights] = useState(false);
  const firstFlights = 5;

  const showMore = () => {
    setShowFlights(true);
  };

  const showLess = () => {
    setShowFlights(false);
  };

  return (
    <Container>
      <FlightsContainer>
        {flightsData
          .slice(0, showFlights ? undefined : firstFlights)
          .map((flight, index) => (
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
      {showFlights ? (
        <SeeMoreButton onClick={showLess}>Show less results</SeeMoreButton>
      ) : (
        <SeeMoreButton onClick={showMore}>Show more results</SeeMoreButton>
      )}
    </Container>
  );
};

export default FlightsFilter;
