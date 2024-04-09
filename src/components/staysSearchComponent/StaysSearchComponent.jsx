import React from "react";
import {
  Container,
  Input,
  InputCalendar,
  InputContainer,
  InputPersons,
  SearchButton,
} from "./style";
import { useNavigate } from "react-router-dom";

const StaysSearchComponent = () => {
  const navigate = useNavigate();

  const handleSearchbutton = () => {
    navigate("/staysSearch");
  };

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Choose city"
          style={{ pointerEvents: "none" }}
        ></Input>
        <InputCalendar type="date"></InputCalendar>
        <InputPersons
          placeholder="2 Adults"
          style={{ pointerEvents: "none" }}
        ></InputPersons>
        <SearchButton onClick={handleSearchbutton}>Search</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default StaysSearchComponent;
