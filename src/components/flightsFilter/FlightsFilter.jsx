import React, { useState } from "react";
import {
  AirlineName,
  Container,
  DealContainer,
  Flight,
  FlightHours,
  FlightLanding,
  FlightLogo,
  FlightPrice,
  FlightTakeOff,
  FlightsContainer,
  Line,
  LogoContainer,
  SeeMoreButton,
  ViewDeal,
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
              <LogoContainer>
                <FlightLogo src={flight.img} />
                <AirlineName>{flight.airlinesName}</AirlineName>
              </LogoContainer>
              <FlightTakeOff>Take off {flight.takeOff}</FlightTakeOff>
              <FlightLanding>Landing {flight.landing}</FlightLanding>
              <FlightHours>{flight.hours}</FlightHours>
              <DealContainer>
                <FlightPrice>
                  <span>Price</span>
                  {flight.price}
                </FlightPrice>
                <Line></Line>
                <ViewDeal>View deal</ViewDeal>
              </DealContainer>
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
