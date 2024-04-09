import React, { useState } from "react";
import { Container, ServiceButton, StyledLink } from "./style";
import { routes } from "../../constants/routes";
import { useActiveButton } from "../../context/ActiveButtonContextProvider";

const ServiceFilter = () => {
  const { activeButton, setActiveButtonId } = useActiveButton();

  const handleClick = (buttonId) => {
    setActiveButtonId(buttonId === activeButton ? null : buttonId);
  };

  return (
    <Container>
      <StyledLink to={routes.flights}>
        <ServiceButton
          isActive={activeButton === 1}
          onClick={() => handleClick(1)}
        >
          Flights
        </ServiceButton>
      </StyledLink>
      <StyledLink to={routes.stays}>
        <ServiceButton
          isActive={activeButton === 2}
          onClick={() => handleClick(2)}
        >
          Stays
        </ServiceButton>
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

export default ServiceFilter;
