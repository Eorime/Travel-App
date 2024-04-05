import React from "react";
import BookFlights from "../../assets/images/bookflight.png";
import BookHotels from "../../assets/images/bookhotels.png";
import BookCruises from "../../assets/images/bookcruises.png";
import BookVacation from "../../assets/images/bookvacation.png";
import {
  Container,
  ElementContainer,
  ImageContainer,
  MainTitle,
  Paragraph,
  ParagraphTitle,
  TheMainParagraph,
} from "./style";

const DiscoverServices = () => {
  return (
    <>
      <MainTitle>Discover Our Services</MainTitle>
      <TheMainParagraph>
        ExploreEra provides a one-stop solution for individuals seeking
        well-planned journeys. These services include expert advice on
        destination selection, flight and accommodation <br></br> bookings, and
        customized itineraries to individual preferences.
      </TheMainParagraph>
      <Container>
        <ElementContainer>
          <ImageContainer src={BookFlights} />
          <ParagraphTitle>Book Flight</ParagraphTitle>
          <Paragraph>
            Book memorable journey with our flight booking <br></br>services!
            we're thrilled to present you <br></br>flight options to suit your
            travel needs.
          </Paragraph>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer src={BookHotels} />
          <ParagraphTitle>Book Hotels</ParagraphTitle>
          <Paragraph>
            Book memorable journey with our flight booking <br></br> services!
            we're thrilled to present you flight <br></br> options to suit your
            travel needs.
          </Paragraph>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer src={BookCruises} />
          <ParagraphTitle>Book Cruises</ParagraphTitle>
          <Paragraph>
            Book memorable journey with our flight booking <br></br> services!
            we're thrilled to present you flight <br></br> options to suit your
            travel needs.
          </Paragraph>
        </ElementContainer>
        <ElementContainer>
          <ImageContainer src={BookVacation} />
          <ParagraphTitle>Book Family Vacations</ParagraphTitle>
          <Paragraph>
            Book memorable journey with our flight booking <br></br> services!
            we're thrilled to present you flight <br></br> options to suit your
            travel needs.
          </Paragraph>
        </ElementContainer>
      </Container>
    </>
  );
};

export default DiscoverServices;
