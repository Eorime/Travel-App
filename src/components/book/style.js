import styled from "styled-components";
import Arrow from "../../assets/images/dropArrow.png";

export const Container = styled.div`
  margin-top: 50px;
  background-color: #e0e0e0;
  width: 100%;
  height: 567px;
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    height: 336px;
    position: relative;
  }
`;

export const Title = styled.h3`
  font-size: 40px;
  color: #424244;
  margin-left: 190px;
  margin-top: 50px;
  position: absolute;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: -35px;
    margin-left: 30px;
  }
`;

export const Form = styled.form`
  position: absolute;
  margin-top: 140px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 1650px;
  margin-left: 190px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 12px;
    margin-left: 30px;
    margin-bottom: 20px;
    position: absolute;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

export const SelectInput = styled.select`
  width: 730px;
  height: 100px;
  border-radius: 20px;
  font-size: 28px;
  color: #424244;
  border: none;
  padding: 30px 50px;
  margin-right: 70px;
  appearance: none;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: right 30px center;
  background-size: 40px 40px;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    height: 48px;
    width: 340px;
    padding: 8px 20px;
    font-size: 20px;
    margin-top: 3px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    border-radius: 8px;
  }
`;

export const BookButton = styled.button`
  height: 98px;
  width: 1580px;
  border-radius: 20px;
  font-size: 32px;
  font-weight: semibold;
  background-color: #ff6700;
  color: #ffffff;
  border: none;
  margin-left: 190px;
  margin-top: 417px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    height: 56px;
    width: 340px;
    border-radius: 8px;
    font-size: 22px;
    font-weight: semibold;
    margin-left: 35px;
    margin-top: 265px;
  }
`;
