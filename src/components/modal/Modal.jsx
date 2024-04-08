import React from "react";
import { AgreeButton, Container, Overlay, Paragraph, Title } from "./style";

const Modal = ({ onClose }) => {
  const handleAgree = () => onClose();

  return (
    <>
      <Overlay onClick={handleAgree} />

      <Container>
        <Title>Terms and conditions</Title>
        <Paragraph>
          Before you use our website or services, please carefully read the
          following Terms and Conditions. By accessing or using our platform,
          you agree to comply with and be bound by these terms. If you do not
          agree with any part of these terms, please do not use our services.
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and disclose information about you. By
          using our services, you consent to our privacy practices.
        </Paragraph>
        <Title>Privacy Policy</Title>
        <Paragraph>
          We may collect personal information, such as your name, email address,
          and other details, when you register an account, make a purchase, or
          interact with our services. We also automatically collect certain
          information, such as IP addresses, browser type, and usage patterns,
          through cookies and similar technologies. Our website may contain
          links to third-party websites or services.
        </Paragraph>
        <AgreeButton onClick={handleAgree}>I agree</AgreeButton>
      </Container>
    </>
  );
};

export default Modal;
