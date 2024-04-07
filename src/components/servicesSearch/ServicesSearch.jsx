import React from "react";
import {
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
        <Input></Input>
        <SearchButton onClick={handleSearchButtonClick}>Search</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default ServicesSearch;
