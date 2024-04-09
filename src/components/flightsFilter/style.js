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

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -870px;
  margin-top: 45px;
`;

export const FlightLogo = styled.img`
  width: 70px;
  align-self: center;
`;

export const AirlineName = styled.h5`
  font-size: 20px;
  font-weight: 500;
  align-self: center;
`;

export const FlightTakeOff = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const FlightLanding = styled.p`
  font-weight: 500;
  font-size: 24px;
`;

export const DealContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 880px;
  margin-top: 44px;
`;

export const FlightPrice = styled.p`
  font-size: 24px;

  span {
    margin-right: 60px;
  }
`;

export const ViewDeal = styled.button`
  width: 173px;
  height: 44px;
  color: #424244;
  background-color: #ff8c3e;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 20px;
  border: none;
`;

export const FlightHours = styled.p`
  font-size: 24px;
  color: #42424460;
`;

export const SeeMoreButton = styled.button`
  height: 74px;
  background-color: #ff6700;
  border: none;
  border-radius: 20px;
  font-size: 32px;
  font-weight: semibold;
  color: #ffffff;
  margin-left: 400px;
  width: 1210px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }
`;

export const Line = styled.div`
  background-color: #42424460;
  height: 2px;
  width: 173px;
  margin-top: -2px;
  margin-bottom: 20px;
`;
