import styled from "styled-components";
import Calendar from "../../assets/images/calendar.png";
import Plus from "../../assets/images/addPlus.png";
import Close from "../../assets/images/closeB.png";
import Down from "../../assets/images/smallDown.png";

export const Container = styled.div`
  margin-left: 150px;
  margin-top: 60px;
  margin-bottom: -300px;
`;

export const FilterContainer = styled.div`
  color: #424244;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: -40px;
`;

export const FilterElement = styled.p`
  font-size: 18px;
  //   background-image: url($);
  //   background-size: contain;
  //   background-repeat: no-repeat;
  //   background-image-height: 32px;
  //   background-image-width: 32px;
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
`;
