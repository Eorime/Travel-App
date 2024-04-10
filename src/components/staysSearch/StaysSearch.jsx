import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  BrowseContainer,
  BrowseImgContainer,
  BrowseImgsContainer,
  BrowseParagraph,
  BrowserImg,
  Container,
} from "./style";
import Hotels from "../../assets/images/hotels.png";
import Apartments from "../../assets/images/apartments.png";
import Resorts from "../../assets/images/resorts.png";
import Villas from "../../assets/images/villas.png";
import LeftArrow from "../../assets/images/arrowLeft.png";
import RightArrow from "../../assets/images/arrowRight.png";

const StaysSearch = () => {
  return (
    <Container>
      <BrowseContainer>
        <ArrowLeft src={LeftArrow} />
        <ArrowRight src={RightArrow} />
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
