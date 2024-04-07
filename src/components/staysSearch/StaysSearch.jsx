import React from "react";
import { Container, Input, InputContainer, SearchButton } from "./style";

const StaysSearch = () => {
  return (
    <Container>
      <InputContainer>
        <Input style={{ pointerEvents: "none" }}></Input>
        <Input style={{ pointerEvents: "none" }}></Input>
        <Input></Input>
        <SearchButton>Search</SearchButton>
      </InputContainer>
    </Container>
  );
};

export default StaysSearch;
