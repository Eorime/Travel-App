import React, { useState } from "react";
import {
  CheapestContainer,
  CheckboxButton,
  CheckboxButtonImage,
  Container,
  FiltersContainer,
  Line,
  Line2,
  Paragraph,
  StopsCheckbox,
  StopsCheckboxLabel,
  StopsContainer,
  StopsContent,
  StopsTitle,
  TimesContainer,
  TimesTitle,
} from "./style";
import OpenForm from "../../assets/images/openform.png";
import CloseForm from "../../assets/images/closeform.png";

const FilterFlights = () => {
  const [stopsDropDown, setStopsDropdown] = useState(false);
  const [selectedStop, setSelectedStop] = useState(null);

  const handleStops = () => {
    setStopsDropdown(!stopsDropDown);
  };

  const handleStopChange = (event) => {
    const { id } = event.target;
    setSelectedStop(id === selectedStop ? null : id);
  };

  return (
    <Container>
      <CheapestContainer>
        <Paragraph>Cheapest</Paragraph>
        <Line></Line>
        <Paragraph>Quickest</Paragraph>
        <Line2></Line2>
        <Paragraph>Best</Paragraph>
      </CheapestContainer>
      <FiltersContainer>
        <StopsContainer>
          <StopsTitle>Stops</StopsTitle>
          <CheckboxButton onClick={handleStops}>
            {stopsDropDown ? (
              <CheckboxButtonImage
                src={CloseForm}
                style={{ marginTop: "-43px" }}
                alt="Close Button"
              />
            ) : (
              <CheckboxButtonImage src={OpenForm} alt="Open Button" />
            )}
          </CheckboxButton>
          {stopsDropDown && (
            <StopsContent>
              <StopsCheckboxLabel>
                <StopsCheckbox
                  type="checkbox"
                  id="direct"
                  checked={selectedStop === "direct"}
                  onChange={handleStopChange}
                />
                <span>Direct</span>
              </StopsCheckboxLabel>
              <StopsCheckboxLabel>
                <StopsCheckbox
                  type="checkbox"
                  id="twoStops"
                  checked={selectedStop === "twoStops"}
                  onChange={handleStopChange}
                />
                <span>Two stops</span>
              </StopsCheckboxLabel>
              <StopsCheckboxLabel>
                <StopsCheckbox
                  type="checkbox"
                  id="threeStops"
                  checked={selectedStop === "threeStops"}
                  onChange={handleStopChange}
                />
                <span>Three stops</span>
              </StopsCheckboxLabel>
            </StopsContent>
          )}
        </StopsContainer>
        <TimesContainer>
          <TimesTitle>Times</TimesTitle>
        </TimesContainer>
      </FiltersContainer>
    </Container>
  );
};

export default FilterFlights;
