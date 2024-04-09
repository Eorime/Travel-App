import React, { useState } from "react";
import {
  CalendarInput,
  Container,
  FilterArrow,
  FilterContainer,
  FilterElement,
  Input,
  InputContainer,
  InputParis,
  SearchButton,
} from "./style";
import Arrow from "../../assets/images/dropArrow.png";
import { useNavigate } from "react-router-dom";

const ServicesSearch = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  const navigate = useNavigate();
  const handleSearchButtonClick = () => {
    navigate("/flights");
  };
  return (
    <Container>
      <FilterContainer>
        <FilterElement>One-way</FilterElement>
        <FilterArrow src={Arrow} />
        <FilterElement>1 Adult</FilterElement>
        <FilterArrow src={Arrow} />
        <FilterElement>Economy</FilterElement>
        <FilterArrow src={Arrow} />
      </FilterContainer>
      <InputContainer>
        <Input
          placeholder="From Tbilisi"
          style={{ pointerEvents: "none" }}
        ></Input>
        <InputParis
          placeholder="To Paris"
          style={{ pointerEvents: "none" }}
        ></InputParis>
        <CalendarInput
          placeholder="Calendar"
          style={{ pointerEvents: "none" }}
        ></CalendarInput>
        <SearchButton onClick={handleSearchButtonClick}>Search</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default ServicesSearch;
