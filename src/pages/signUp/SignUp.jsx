import React, { useState } from "react";
import { useAuthentification } from "../../context/AuthentificationProvider";
import { useNavigate } from "react-router-dom";
import {
  And,
  Container,
  ContinueWith,
  ContinueWithContainer,
  Form,
  Icon,
  IconContainer,
  ImageUploadIcon,
  Input,
  Label,
  Line,
  LongLine,
  SignUpButton,
  Terms,
  TermsContainer,
  UploadedImage,
} from "./style";
import ImageUpload from "../../assets/images/pictureUpload.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import FB from "../../assets/images/fb.png";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import Mail from "../../assets/images/mail.png";
import Modal from "../../components/modal/Modal";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuthentification();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile);

    const imageUrl = URL.createObjectURL(imgFile);
    localStorage.setItem("userImage", imageUrl);
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !rePassword ||
      !image
    ) {
      setError("Fill in all fields and upload an image");
      return;
    }

    if (password !== rePassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await signUp(firstName, lastName, email, password);
      navigate("/signin");
    } catch (error) {
      setError("There was an error, please try again");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmitButton}>
          <Label htmlFor="name">First Name</Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <Label htmlFor="re-enter">Confirm the password</Label>
          <Input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Re-enter Password"
          />
          <Label
            htmlFor="image"
            style={{
              width: "100px",
              height: "100px",
              display: "inline-block",
              position: "relative",
            }}
          >
            {image ? (
              <>
                <UploadedImage
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                />
                <ImageUploadIcon
                  src={ImageUpload}
                  alt="Upload"
                  style={{ width: "100%", height: "100%", opacity: 0 }}
                />
              </>
            ) : (
              <ImageUploadIcon
                src={ImageUpload}
                alt="Upload"
                style={{ width: "100%", height: "100%", opacity: 1 }}
              />
            )}
          </Label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <SignUpButton type="submit">Sign Up</SignUpButton>
          {error && <div>{error}</div>}
        </Form>
        <ContinueWithContainer>
          <Line />
          <ContinueWith>Or continue with</ContinueWith>
          <Line />
        </ContinueWithContainer>
        <IconContainer>
          <Icon src={FB} />
          <Icon src={Apple} />
          <Icon src={Google} />
          <Icon src={Mail} />
        </IconContainer>
        <LongLine />
        <TermsContainer>
          <Terms>
            By signing in or creating an account, you agree with our <br></br>
            <And onClick={handleOpenModal}>Terms & conditions</And> and
            <And onClick={handleOpenModal}> Privacy policy</And>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
          </Terms>
        </TermsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
