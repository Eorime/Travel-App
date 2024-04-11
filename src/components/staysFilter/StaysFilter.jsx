import React, { useState } from "react";
import {
  Checkbox,
  CheckboxLabel,
  Container,
  FilterName,
  Line,
  OneFilterContainer,
  Span,
  StyledLink,
  Title,
} from "./style";

const StaysFilter = () => {
  const [stay, setStay] = useState(null);

  const handleStayChange = (event) => {
    const { id } = event.target;
    setStay(id === stay ? null : id);
  };

  return (
    <Container>
      <Title>Filter by:</Title>
      <Line></Line>
      <OneFilterContainer>
        <FilterName>Property Type</FilterName>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Hotel</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Apartment</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Villa</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Guest house</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Resort</Span>
        </CheckboxLabel>
        <StyledLink>Show all 15</StyledLink>
      </OneFilterContainer>
      <OneFilterContainer>
        <FilterName>Property rating</FilterName>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="5stars"
            checked={stay === "5stars"}
            onChange={handleStayChange}
          ></Checkbox>
          <Span>5 Stars</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="4stars"
            checked={stay === "4stars"}
            onChange={handleStayChange}
          ></Checkbox>
          <Span>4 Stars</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="3stars"
            checked={stay === "3stars"}
            onChange={handleStayChange}
          ></Checkbox>
          <Span>3 Stars</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="2stars"
            checked={stay === "2stars"}
            onChange={handleStayChange}
          ></Checkbox>
          <Span>2 Stars</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            id="unrated"
            checked={stay === "unrated"}
            onChange={handleStayChange}
          ></Checkbox>
          <Span>Unrated</Span>
        </CheckboxLabel>
      </OneFilterContainer>
      <OneFilterContainer>
        <FilterName>Facilities</FilterName>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Wifi</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Parking</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Pets allowed</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Fitness center</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Swimming pool</Span>
        </CheckboxLabel>
        <StyledLink>Show all 15</StyledLink>
      </OneFilterContainer>
      <OneFilterContainer>
        <FilterName>Room Facilities</FilterName>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Balcony</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>TV</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Kitchen</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Air conditioning</Span>
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox"></Checkbox>
          <Span>Washing machine</Span>
        </CheckboxLabel>
        <StyledLink>Show all 15</StyledLink>
      </OneFilterContainer>
    </Container>
  );
};

export default StaysFilter;
