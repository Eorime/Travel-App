import React from "react";
import {
  Container,
  Content,
  MainText,
  OfferButton,
  SecondaryText,
} from "./style";

const HomeIntro = () => {
  return (
    <Container>
      <Content>
        <SecondaryText>Visit Mountains In</SecondaryText>
        <MainText>ITALY</MainText>
        <OfferButton>See Offer</OfferButton>
      </Content>
    </Container>
  );
};

export default HomeIntro;
