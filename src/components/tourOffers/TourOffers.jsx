import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Card,
  CardContainer,
  CardDetails,
  CardImg,
  CardPrice,
  CardTitle,
  CarouselContainer,
  Container,
  Title,
} from "./style";
import LeftArrow from "../../assets/images/arrowLeft.png";
import RightArrow from "../../assets/images/arrowRight.png";
import { data } from "../../data/carouselData/data";

const TourOffers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data.length;

  const slidesPerPage = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - slidesPerPage));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Container>
      <Title>Popular Tour Offers</Title>
      <ArrowLeft src={LeftArrow} alt="Previous" onClick={prevSlide} />
      <ArrowRight src={RightArrow} alt="Next" onClick={nextSlide} />
      <CarouselContainer>
        <CardContainer>
          {data
            .slice(currentSlide, currentSlide + slidesPerPage)
            .map((card, index) => (
              <Card key={index}>
                <CardImg src={card.img} />
                <CardTitle>{card.title}</CardTitle>
                <CardDetails>{card.description}</CardDetails>
                <CardPrice>{card.price}</CardPrice>
              </Card>
            ))}
        </CardContainer>
      </CarouselContainer>
    </Container>
  );
};

export default TourOffers;
