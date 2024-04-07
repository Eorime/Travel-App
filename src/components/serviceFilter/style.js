import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 160px;
  margin-left: 170px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ServiceButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 15px 30px;
  background: ${({ isActive }) => (isActive ? "#ff6700" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#424244")};
  margin-right: 40px;
  font-size: 24px;

  &: hover {
    cursor: pointer;
  }
`;
