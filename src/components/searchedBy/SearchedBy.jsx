import React from "react";
import {
  Container,
  Facilities,
  FacilitiesContainer,
  FacilitiesTitle,
  Facility,
  Input,
  InputsContainer,
  Label,
  MapImage,
  Paragraph,
  SearchedByContainer,
  Title,
} from "./style";
import MapImg from "../../assets/images/map.png";

const SearchedBy = () => {
  return (
    <Container>
      <SearchedByContainer>
        <Title>Searched by:</Title>
        <InputsContainer>
          <Label htmlFor="destination">Destination</Label>
          <Input
            style={{ pointerEvents: "none" }}
            placeholder="Aucklad, New Zealand"
          ></Input>
          <Label htmlFor="checkin">Check-in date</Label>
          <Input
            style={{ pointerEvents: "none" }}
            placeholder="Thursday, February 1, 2024   "
          ></Input>
          <Label htmlFor="checkout">Check-out date</Label>
          <Input
            placeholder="Friday, February 9, 2024"
            style={{ pointerEvents: "none" }}
          ></Input>
          <Label htmlFor="persons">Persons</Label>
          <Input
            placeholder="2 Adults, 0 children, 1 room"
            style={{ pointerEvents: "none" }}
          ></Input>
        </InputsContainer>
        <Paragraph>Total 8 days</Paragraph>
      </SearchedByContainer>
      <MapImage src={MapImg} />
      <FacilitiesContainer>
        <FacilitiesTitle>All the facilities:</FacilitiesTitle>
        <Facilities>
          <Facility>Private pool</Facility>
          <Facility>Terrace</Facility>
          <Facility>Kitchen</Facility>
          <Facility>1 Bedroom</Facility>
          <Facility>2 Bathrooms</Facility>
          <Facility>Kids play space</Facility>
          <Facility>Billiard room</Facility>
          <Facility>Private gym</Facility>
        </Facilities>
      </FacilitiesContainer>
    </Container>
  );
};

export default SearchedBy;
