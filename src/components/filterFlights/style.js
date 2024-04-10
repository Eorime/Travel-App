import styled from "styled-components";

export const Container = styled.div`
  margin-left: 170px;
  margin-top: 380px;
  position: relative;
`;

export const CheapestContainer = styled.div`
  height: 220px;
  width: 350px;
  border-radius: 20px;
  background-color: #ffffff;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
`;

export const Paragraph = styled.p`
  font-size: 28px;
  color: #424244;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  background-color: #ff6700;
  width: 130px;
  height: 2px;
  margin-top: 80px;
  position: absolute;
`;

export const Line2 = styled.div`
  background-color: #ff6700;
  width: 130px;
  height: 2px;
  margin-top: 160px;
  position: absolute;
`;

export const FiltersContainer = styled.div`
  height: 1430px;
  width: 370px;
  margin-top: 260px;
  background-color: #ffffff;
  border-radius: 20px;
  position: absolute;
`;

export const StopsTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: #424244;
  margin-top: 20px;
`;

export const StopsContainer = styled.div`
  margin-left: 20px;
`;

export const StopsContent = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: -30px;
`;

export const StopsCheckboxLabel = styled.label`
  font-size: 24px;
  color: #424244;
`;

export const StopsCheckbox = styled.input`
  margin-bottom: 20px;
  margin-right: 20px;
  width: 30px;
  height: 30px;

  &: hover {
    cursor: pointer;
  }
`;

export const CheckboxButton = styled.div`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;

  &: hover {
    cursor: pointer;
  }
`;

export const CheckboxButtonImage = styled.img`
  position: absolute;
  margin-left: 280px;
  margin-top: -50px;
`;

export const TimesContainer = styled.div`
  margin-left: 20px;
  position: relative;
`;

export const TimesTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: #424244;
  margin-top: 145px;
`;

export const SliderContainer = styled.div`
  width: 320px;
  margin: 20px 0;
`;

export const SliderInput = styled.input`
  width: 300px;
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  border-radius: 5px;
  background: #c85100;
  outline: none;
  -webkit-transition: 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #c85100;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #c85100;
    cursor: pointer;
    top: 162px;
    right: 35px;
    z-index: 1;
  }
`;

export const SliderInput2 = styled.input`
  width: 300px;
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  border-radius: 5px;
  background: #c85100;
  outline: none;
  -webkit-transition: 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #c85100;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #c85100;
    cursor: pointer;
    top: 298px;
    right: 35px;
    z-index: 1;
  }
`;

export const TakeOffParagraph1 = styled.p`
  font-size: 24px;
  color: #424244;
`;

export const TakeOffParagraph2 = styled.p`
  font-size: 24px;
  color: #424244;
`;

export const TakeOff1 = styled.p`
  font-size: 20px;
  color: #42424460;
`;

export const TakeOff2 = styled.p`
  font-size: 20px;
  color: #42424460;
`;

export const TakeOff24 = styled.p`
  font-size: 20px;
  color: #42424460;
  margin-left: 280px;
  margin-top: -38px;
`;

export const TakeOff24Two = styled.p`
  font-size: 20px;
  color: #42424460;
  margin-left: 280px;
  margin-top: -47px;
`;

export const AirlinesContainer = styled.div`
  margin-left: 20px;
`;

export const AirlinesTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: #424244;
  margin-top: 50px;
`;

export const AirPortsTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: #424244;
  margin-top: -30px;
`;

export const DurationContainer = styled.div`
  margin-left: 20px;
`;

export const DurationTitle = styled.h1`
  font-weight: 400;
  font-size: 28px;
  color: #424244;
  margin-top: -30px;
`;
