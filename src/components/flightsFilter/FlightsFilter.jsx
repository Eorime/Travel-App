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
  LandingContainer,
  LandingP,
  Line,
  LogoContainer,
  SeeMoreButton,
  StopLine,
  StopsContainer,
  TakeOffP,
  ViewDeal,
} from "./style";
import { CubeStops, flightsData } from "../../data/flightsData/data";
import { TakeOffParagraph1 } from "../filterFlights/style";

const FlightsFilter = () => {
  const [showFlights, setShowFlights] = useState(false);
  const firstFlights = 8;

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
              <TakeOffP>Take off</TakeOffP>
              <FlightTakeOff>{flight.takeOff}</FlightTakeOff>
              <StopsContainer>
                <CubeStops stops={flight.stops} />
                <StopLine></StopLine>
              </StopsContainer>
              <LandingP>Landing</LandingP>
              <FlightLanding> {flight.landing}</FlightLanding>
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
