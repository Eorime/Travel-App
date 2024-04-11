import styled from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
  margin-top: -1620px;
  color: #424244;
  font-weight: 300;
`;

export const StaysContainer = styled.div`
  margin-left: 400px;
`;

export const StayContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  width: 1080px;
  height: 330px;
  padding-top: 40px;
  margin-top: 20px;
  padding-left: 30px;
`;

export const SeeMoreButton = styled.button`
  height: 74px;
  background-color: #ff6700;
  border: none;
  border-radius: 20px;
  font-size: 32px;
  font-weight: semibold;
  color: #ffffff;
  width: 1110px;
  margin-top: 20px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }
`;

export const StayImage = styled.img`
  height: 285px;
  width: 380px;
  border-radius: 20px;
`;

export const StayTitle = styled.h1``;

export const StaySubtitle = styled.h2`
  margin-top: 5px;
  font-weight: 400;
`;

export const StayLocation = styled.p`
  margin-top: 5px;
`;

export const StayDescription = styled.p`
  margin-top: 5px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 25px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 920px;
  margin-top: -240px;
  margin-bottom: 80px;
`;

export const StayRating = styled.p`
  margin-top: -20px;
  margin-bottom: -20px;
`;

export const StayPrice = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-top: -20px;
`;

export const DetailsButton = styled.button`
  height: 60px;
  background-color: #ff6700;
  border: none;
  border-radius: 20px;
  font-size: 24px;
  font-weight: semibold;
  color: #ffffff;
  width: 620px;
  margin-top: -100px;
  margin-left: 420px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }
`;

export const StayTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -300px;
  margin-left: 400px;
  white-space: nowrap;
`;

export const Paragraph = styled.p`
  font-size: 24px;
`;
