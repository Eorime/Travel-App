import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BrowseContainer,
  BrowseImgContainer,
  BrowseImgsContainer,
  BrowseParagraph,
  BrowseTitle,
  BrowserImg,
  Container,
  Input,
  InputCalendar,
  InputContainer,
  InputPersons,
  SearchButton,
} from "./style";
import Hotels from "../../assets/images/hotels.png";
import Apartments from "../../assets/images/apartments.png";
import Resorts from "../../assets/images/resorts.png";
import Villas from "../../assets/images/villas.png";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/arrowLeft.png";
import RightArrow from "../../assets/images/arrowRight.png";
import StaysSearchComponent from "../staysSearchComponent/StaysSearchComponent";

const StaysSearch = () => {
  return (
    <Container>
      <StaysSearchComponent />
      <BrowseContainer>
        <BrowseImgsContainer>
          <BrowseImgContainer>
            <BrowserImg src={Hotels} />
            <BrowseParagraph>Hotels</BrowseParagraph>
          </BrowseImgContainer>
          <BrowseImgContainer>
            <BrowserImg src={Apartments} />
            <BrowseParagraph>Apartments</BrowseParagraph>
          </BrowseImgContainer>
          <BrowseImgContainer>
            <BrowserImg src={Resorts} />
            <BrowseParagraph>Resorts</BrowseParagraph>
          </BrowseImgContainer>
          <BrowseImgContainer>
            <BrowserImg src={Villas} />
            <BrowseParagraph>Villas</BrowseParagraph>
          </BrowseImgContainer>
        </BrowseImgsContainer>
      </BrowseContainer>
    </Container>
  );
};

export default StaysSearch;
