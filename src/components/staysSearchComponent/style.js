import styled from "styled-components";
import Plus from "../../assets/images/addPlus.png";
import Down from "../../assets/images/smallDown.png";

export const Container = styled.div`
  margin-left: 150px;
  margin-top: 40px;
  margin-bottom: 600px;
`;

export const InputContainer = styled.div`
  margin-left: 20px;
  margin-top: 5px;
`;

export const Input = styled.input`
  font-size: 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 380px;
  height: 50px;
  margin-right: 20px;
  font-size: 20px;
  padding-left: 20px;
  background: url(${Plus}) calc(100% - 20px) center no-repeat,
    url(${Down}) calc(100% - 230px) center no-repeat;
  background-size: 40px 40px, 32px 32px, 32px 32px;
  background-color: #ffffff;

  &: active {
    border: solid 2px #c85100;
  }
`;

export const InputCalendar = styled.input`
  font-size: 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 430px;
  height: 50px;
  margin-right: 20px;
  padding-left: 20px;
  font-size: 20px;
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: calc(100% - 20px) center;

  &: hover {
    cursor: pointer;
  }

  &: active {
    border: solid 2px #c85100;
  }

  &::-webkit-calendar-picker-indicator {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42QAAAAASUVORK5CYII=");
    opacity: 0;
    margin-right: 28px;

    &: hover {
      cursor: pointer;
    }
  }
`;

export const InputPersons = styled.input`
  font-size: 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  border: solid 2px #ff6700;
  width: 380px;
  height: 50px;
  margin-right: 20px;
  font-size: 20px;
  padding-left: 20px;
  background: url(${Plus}) calc(100% - 20px) center no-repeat,
    url(${Down}) calc(100% - 260px) center no-repeat;
  background-size: 40px 40px, 32px 32px, 32px 32px;
  background-color: #ffffff;

  &: active {
    border: solid 2px #c85100;
  }
`;

export const SearchButton = styled.button`
  height: 60px;
  width: 260px;
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
