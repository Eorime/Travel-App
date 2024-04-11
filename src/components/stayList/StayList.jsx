import React, { useState } from "react";
import { staysData } from "../../data/staysData/data";
import {
  Container,
  DetailsButton,
  Paragraph,
  PriceContainer,
  SeeMoreButton,
  StayContainer,
  StayDescription,
  StayImage,
  StayLocation,
  StayPrice,
  StayRating,
  StaySubtitle,
  StayTextContainer,
  StayTitle,
  StaysContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

const StayList = () => {
  const [showStays, setShowStays] = useState(false);
  const firstStays = 5;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/staysDetails");
  };

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
              <StayTextContainer>
                <StayTitle>{stay.title}</StayTitle>
                <StaySubtitle>{stay.subTitle}</StaySubtitle>
                <StayLocation>{stay.locationText}</StayLocation>
                <StayDescription>{stay.description}</StayDescription>
              </StayTextContainer>
              <PriceContainer>
                <Paragraph>Rating:</Paragraph>
                <StayRating> {stay.rating}</StayRating>
                <Paragraph>Price:</Paragraph>
                <StayPrice> {stay.price}</StayPrice>
              </PriceContainer>
              <DetailsButton onClick={handleNavigate}>
                Show details
              </DetailsButton>
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
