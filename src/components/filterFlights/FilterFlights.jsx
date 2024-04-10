import React, { useState } from "react";
import {
  AirPortsTitle,
  AirlinesContainer,
  AirlinesTitle,
  CheapestContainer,
  CheckboxButton,
  CheckboxButtonImage,
  Container,
  DurationContainer,
  DurationTitle,
  FiltersContainer,
  Line,
  Line2,
  Paragraph,
  SliderContainer,
  SliderInput,
  SliderInput2,
  StopsCheckbox,
  StopsCheckboxLabel,
  StopsContainer,
  StopsContent,
  StopsTitle,
  TakeOff1,
  TakeOff2,
  TakeOff24,
  TakeOff24Two,
  TakeOffParagraph1,
  TakeOffParagraph2,
  TimesContainer,
  TimesTitle,
} from "./style";
import OpenForm from "../../assets/images/openform.png";
import CloseForm from "../../assets/images/closeform.png";

const FilterFlights = () => {
  const [stopsDropDown, setStopsDropdown] = useState(true);
  const [selectedStop, setSelectedStop] = useState(null);
  const [timeDrop, setTimeDrop] = useState(true);
  const [takeOffOne, setTakeOffOne] = useState("12:00");
  const [takeOffTwo, setTakeOffTwo] = useState("12:00");
  const [airport, setAirport] = useState(false);
  const [airline, setAirline] = useState(false);
  const [duration, setDuration] = useState(true);

  const handleDuration = () => {
    setDuration(!duration);
  };

  const handleAirline = () => {
    setAirline(!airline);
  };

  const handleAirport = () => {
    setAirport(!airport);
  };

  const handleSliderChange = (event, setter) => {
    const totalMinutes = parseInt(event.target.value);
    const hours = Math.floor(totalMinutes / 60) + 12;
    const minutes = totalMinutes % 60;
    const formattedHours = hours === 24 ? "00" : hours;
    setter(`${formattedHours}:${minutes < 10 ? "0" + minutes : minutes}`);
  };

  const handleDurationSlider = (event, setter) => {
    const totalDuration = parseInt(event.target.value);
  };

  const handleStops = () => {
    setStopsDropdown(!stopsDropDown);
  };

  const handleTime = () => {
    setTimeDrop(!timeDrop);
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
          <CheckboxButton onClick={handleTime}>
            {timeDrop ? (
              <CheckboxButtonImage
                src={CloseForm}
                style={{ marginTop: "-43px" }}
                alt="Close Button"
              />
            ) : (
              <CheckboxButtonImage src={OpenForm} alt="Open Button" />
            )}
          </CheckboxButton>
          {timeDrop && (
            <>
              <SliderContainer>
                <TakeOffParagraph1 style={{ marginTop: "-50px" }}>
                  Take off - Paris{" "}
                </TakeOffParagraph1>
                <TakeOff1>{takeOffOne}</TakeOff1>
                <TakeOff24>24:00</TakeOff24>
                <SliderInput
                  type="range"
                  min={0}
                  max={720}
                  step={15}
                  value={
                    (parseInt(takeOffOne.split(":")[0]) - 12) * 60 +
                    parseInt(takeOffOne.split(":")[1])
                  }
                  onChange={(event) => handleSliderChange(event, setTakeOffOne)}
                />
              </SliderContainer>
              <SliderContainer>
                <TakeOffParagraph2>Take off - Tbilisi </TakeOffParagraph2>
                <TakeOff2>{takeOffTwo}</TakeOff2>
                <TakeOff24Two>24:00</TakeOff24Two>
                <SliderInput2
                  type="range"
                  min={0}
                  max={720}
                  step={15}
                  value={
                    (parseInt(takeOffTwo.split(":")[0]) - 12) * 60 +
                    parseInt(takeOffTwo.split(":")[1])
                  }
                  onChange={(event) => handleSliderChange(event, setTakeOffTwo)}
                />
              </SliderContainer>
            </>
          )}
        </TimesContainer>
        <AirlinesContainer>
          <AirlinesTitle>Airlines</AirlinesTitle>
          <CheckboxButton onClick={handleAirline}>
            {airline ? (
              <CheckboxButtonImage
                src={CloseForm}
                style={{ marginTop: "-43px" }}
                alt="Close Button"
              />
            ) : (
              <CheckboxButtonImage src={OpenForm} alt="Open Button" />
            )}
          </CheckboxButton>
          <AirPortsTitle>Airports</AirPortsTitle>
          <CheckboxButton onClick={handleAirport}>
            {airport ? (
              <CheckboxButtonImage
                src={CloseForm}
                style={{ marginTop: "-43px" }}
                alt="Close Button"
              />
            ) : (
              <CheckboxButtonImage src={OpenForm} alt="Open Button" />
            )}
          </CheckboxButton>
        </AirlinesContainer>
        <DurationContainer>
          <DurationTitle>Duration</DurationTitle>
          <CheckboxButton onClick={handleDuration}>
            {duration ? (
              <CheckboxButtonImage
                src={CloseForm}
                style={{ marginTop: "-43px" }}
                alt="Close Button"
              />
            ) : (
              <CheckboxButtonImage src={OpenForm} alt="Open Button" />
            )}
            {/* /**{duration &&()} */}
          </CheckboxButton>
        </DurationContainer>
      </FiltersContainer>
    </Container>
  );
};

export default FilterFlights;
