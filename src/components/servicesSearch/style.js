import styled from "styled-components";
import Calendar from "../../assets/images/calendar.png";
import Plus from "../../assets/images/addPlus.png";
import Close from "../../assets/images/closeB.png";
import Down from "../../assets/images/smallDown.png";

export const Container = styled.div`
  margin-left: 150px;
  margin-top: 60px;
  margin-bottom: -300px;

  @media screen and (max-width: 800px) {
    margin-bottom: -620px;
  }
`;

export const FilterContainer = styled.div`
  color: #424244;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: -40px;

  @media screen and (max-width: 800px) {
    white-space: nowrap;
    margin-left: -100px;
  }
`;

export const FilterElement = styled.p`
  font-size: 18px;
`;

export const FilterArrow = styled.img`
  width: 25px;
  height: 25px;
  margin-top: 17px;
  margin-right: 25px;
  margin-left: 8px;
`;

export const InputContainer = styled.div`
  margin-left: 20px;
  margin-top: 5px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  font-size: 20px;
  border: none;
  font-size: 18px;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 430px;
  height: 50px;
  margin-right: 20px;
  background: url(${Plus}) calc(100% - 20px) center no-repeat,
    url(${Close}) calc(100% - 270px) center no-repeat;
  background-size: 40px 40px, 32px 32px, 32px 32px;
  background-color: #ffffff;

  &::placeholder {
    padding-left: 25px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -130px;
    height: 64px;
    width: 340px;
    background: url(${Plus}) calc(100% - 20px) center no-repeat,
      url(${Close}) calc(100% - 180px) center no-repeat;
    background-size: 40px 40px, 32px 32px, 32px 32px;
    background-color: #ffffff;
  }
`;

export const InputParis = styled.input`
  font-size: 20px;
  border: none;
  font-size: 18px;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 430px;
  height: 50px;
  margin-right: 20px;
  background: url(${Plus}) calc(100% - 20px) center no-repeat,
    url(${Down}) calc(100% - 300px) center no-repeat;
  background-size: 40px 40px, 32px 32px, 32px 32px;
  background-color: #ffffff;

  &::placeholder {
    padding-left: 25px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -130px;
    height: 64px;
    width: 340px;
    background: url(${Plus}) calc(100% - 20px) center no-repeat,
      url(${Down}) calc(100% - 210px) center no-repeat;
    background-size: 40px 40px, 32px 32px, 32px 32px;
    background-color: #ffffff;
  }
`;

export const SearchButton = styled.button`
  height: 60px;
  width: 230px;
  border: none;
  border-radius: 20px;
  background-color: #ff6700;
  color: #ffffff;
  font-size: 24px;

  &: hover {
    background-color: #c85100;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -130px;
    height: 64px;
    width: 340px;
  }
`;

export const CalendarInput = styled.input`
  font-size: 20px;
  border: none;
  font-size: 18px;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 430px;
  height: 50px;
  margin-right: 20px;

  &::placeholder {
    padding-left: 60px;
  }

  background: url(${Plus}) calc(100% - 20px) center no-repeat,
    url(${Calendar}) calc(100% - 380px) center no-repeat,
    url(${Close}) calc(100% - 260px) center no-repeat;
  background-size: 40px 40px, 32px 32px, 32px 32px;
  background-color: #ffffff;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    margin-left: -130px;
    height: 64px;
    width: 340px;
    background: url(${Plus}) calc(100% - 20px) center no-repeat,
      url(${Calendar}) calc(100% - 290px) center no-repeat,
      url(${Close}) calc(100% - 160px) center no-repeat;
    background-size: 40px 40px, 32px 32px, 32px 32px;
    background-color: #ffffff;

    &::placeholder {
      padding-left: 60px;
    }
  }
`;
