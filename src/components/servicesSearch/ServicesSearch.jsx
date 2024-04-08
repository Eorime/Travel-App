import React, { useState } from "react";
import {
  CalendarInput,
  Container,
  FilterArrow,
  FilterContainer,
  FilterElement,
  Input,
  InputContainer,
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
        <Input style={{ pointerEvents: "none" }}></Input>
        <Input style={{ pointerEvents: "none" }}></Input>
        <CalendarInput type="date"></CalendarInput>
        <SearchButton onClick={handleSearchButtonClick}>Search</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default ServicesSearch;
