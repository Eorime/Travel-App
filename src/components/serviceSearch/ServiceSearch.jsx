import React, { useState } from "react";
import { Container, ServiceButton, StyledLink } from "./style";
import { routes } from "../../constants/routes";

const ServiceSearch = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  return (
    <Container>
      <ServiceButton
        isActive={activeButton === 1}
        onClick={() => handleClick(1)}
      >
        Flights
      </ServiceButton>
      <StyledLink
        isActive={activeButton === 2}
        onClick={() => handleClick(2)}
        to={routes.stays}
      >
        <ServiceButton>Stays</ServiceButton>
      </StyledLink>
      <ServiceButton
        isActive={activeButton === 3}
        onClick={() => handleClick(3)}
      >
        Car rentals
      </ServiceButton>
      <ServiceButton
        isActive={activeButton === 4}
        onClick={() => handleClick(4)}
      >
        Cruises
      </ServiceButton>
      <ServiceButton
        isActive={activeButton === 5}
        onClick={() => handleClick(5)}
      >
        Attractions
      </ServiceButton>
    </Container>
  );
};

export default ServiceSearch;
