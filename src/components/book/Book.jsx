import React from "react";
import { BookButton, Container, Form, SelectInput, Title } from "./style";
import { data } from "../../data/bookingData/bookingData";

const Book = () => {
  return (
    <Container>
      <Title>Ready To Book A Trip?</Title>
      <Form>
        <SelectInput id="option2" name="option2">
          <option value="" disabled selected>
            Your starting location
          </option>
          {data.map((location, index) => (
            <option
              key={index}
              style={{
                fontSize: "16px",
              }}
            >
              {location.capital}, {location.country}
            </option>
          ))}
        </SelectInput>
        <SelectInput id="offer" name="offer">
          <option value="" disabled selected>
            Choose a tour offer
          </option>
        </SelectInput>
        <SelectInput id="date" name="date">
          <option value="" disabled selected>
            Choose date
          </option>
        </SelectInput>
        <SelectInput id="people" name="people">
          <option value="" disabled selected>
            Persons
          </option>
          <option value="option2">1 Person</option>
          <option value="option3">2 People</option>
          <option value="option3">3 People</option>
        </SelectInput>
      </Form>
      <BookButton>Book Now</BookButton>
    </Container>
  );
};

export default Book;
