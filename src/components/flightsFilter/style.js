import styled from "styled-components";

export const Container = styled.div`
  margin-left: 170px;
  margin-top: 365px;
  margin-bottom: -550px;
`;

export const FlightsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Flight = styled.div`
  max-width: 100%;
  width: 1170px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-left: 400px;
  padding: 20px;
  color: #424244;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-top: 35px;
  margin-bottom: 20px;
  white-space: nowrap;
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
  margin-left: 80px;
  margin-right: 70px;
  margin-top: 92px;
`;

export const FlightLanding = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-top: 92px;
  margin-left: -75px;
`;

export const DealContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  margin-top: 3px;
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
  margin-top: 92px;
  white-space: nowrap;
  margin-left: 30px;
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

export const StopsContainer = styled.div`
  margin-top: 100px;
  margin-left: -40px;
`;

export const StopLine = styled.div`
  width: 200px;
  height: 2px;
  background-color: #c85100;
  margin-top: -42px;
`;

export const TakeOffP = styled.p`
  font-size: 24px;
  color: #424244;
  white-space: nowrap;
  margin-top: 40px;
  margin-right: -160px;
  margin-left: 90px;
`;

export const LandingP = styled.p`
  font-size: 24px;
  color: #424244;
  white-space: nowrap;
  margin-top: 40px;
`;
