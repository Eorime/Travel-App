import styled from "styled-components";

export const Container = styled.div`
  margin-left: 170px;
  margin-top: 365px;
`;

export const FlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flight = styled.div`
  max-width: 100%;
  width: 1170px;
  height: auto;
  background-color: #ffffff;
  border-radius: 20px;
  margin-left: 400px;
  padding: 20px;
  color: #424244;
  margin-bottom: 20px;
`;

export const FlightLogo = styled.img`
  width: 70px;
`;

export const AirlineName = styled.h5`
  font-size: 20px;
  font-weight: 500;
`;

export const FlightTakeOff = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const FlightLanding = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const FlightPrice = styled.p`
  font-size: 24px;
`;

export const FlightHours = styled.p`
  font-size: 24px;
  color: #42424460;
`;

export const SeeMoreButton = styled.button`
  height: 74px;
  width: 940px;
  background-color: #ff6700;
  border: none;
  border-radius: 20px;
  font-size: 32px;
  font-weight: semibold;
  color: #ffffff;
  margin-left: 650px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }
`;
