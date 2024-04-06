import styled from "styled-components";
import playButtonImage from "../../assets/images/playButton.png";

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 40px;
  color: #424244;
  margin-left: 190px;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: 10px;
    margin-left: 55px;
  }
`;

export const VideoPlayer = styled.div`
  position: relative;
  height: 725px;
  width: 1580px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 190px;

  @media screen and (max-width: 800px) {
    margin-left: 55px;
    height: 180px;
    width: 340px;
  }
`;

export const Video = styled.video`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &: hover {
    cursor: pointer;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${playButtonImage}) no-repeat center center;
  background-size: contain;
  width: 100px;
  height: 100px;
  border: none;

  &: hover {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    height: 32px;
    width: 32px;
  }
`;
