import React from "react";
import { BookButton, Container, Form, SelectInput, Title } from "./style";

const Book = () => {
  return (
    <Container>
      <Title>Ready To Book A Trip?</Title>
      <Form>
        <SelectInput id="option2" name="option2">
          <option value="" disabled selected>
            Your starting location
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectInput>
        <SelectInput id="option2" name="option2">
          <option value="" disabled selected>
            Choose a tour offer
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectInput>
        <SelectInput id="option2" name="option2">
          <option value="" disabled selected>
            Choose date
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectInput>
        <SelectInput id="option2" name="option2">
          <option value="" disabled selected>
            Persons
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectInput>
      </Form>
      <BookButton>Book Now</BookButton>
    </Container>
  );
};

export default Book;
