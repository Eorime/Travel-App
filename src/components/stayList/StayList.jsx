import React, { useState } from "react";
import { staysData } from "../../data/staysData/data";
import {
  Container,
  SeeMoreButton,
  StayContainer,
  StayDescription,
  StayImage,
  StayLocation,
  StayPrice,
  StayRating,
  StaySubtitle,
  StayTitle,
  StaysContainer,
} from "./style";

const StayList = () => {
  const [showStays, setShowStays] = useState(false);
  const firstStays = 5;

  const showMore = () => {
    setShowStays(true);
  };

  const showLess = () => {
    setShowStays(false);
  };

  return (
    <Container>
      <StaysContainer>
        {staysData
          .slice(0, showStays ? undefined : firstStays)
          .map((stay, index) => (
            <StayContainer key={index}>
              <StayImage src={stay.img} />
              <StayTitle>{stay.title}</StayTitle>
              <StaySubtitle>{stay.subTitle}</StaySubtitle>
              <StayLocation>{stay.locationText}</StayLocation>
              <StayDescription>{stay.description}</StayDescription>
              <StayRating>{stay.rating}</StayRating>
              <StayPrice> {stay.price} </StayPrice>
            </StayContainer>
          ))}

        {showStays ? (
          <SeeMoreButton onClick={showLess}>Show less results</SeeMoreButton>
        ) : (
          <SeeMoreButton onClick={showMore}>Show more results</SeeMoreButton>
        )}
      </StaysContainer>
    </Container>
  );
};

export default StayList;
