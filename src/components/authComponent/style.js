import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 270px;
  height: 165px;
  color: #424244;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: fixed;
  margin-left: 520px;
  margin-top: 130px;
`;

export const AuthElement = styled.p`
  margin-bottom: 8px;
  margin-top: 15px;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Line = styled.div`
  height: 1px;
  background-color: #ff6700;
  width: 240px;
  margin-left: 10px;
`;
