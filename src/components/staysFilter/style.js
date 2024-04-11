import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-left: 170px;
  width: 380px;
  height: 1500px;
  background-color: #ffffff;
  border-radius: 20px;
  padding-bottom: 120px;
  margin-top: -550px;
`;

export const Title = styled.p`
  color: #424244;
  font-size: 28px;
  font-weight: 500;
  margin-left: 30px;
  padding-top: 20px;
`;

export const OneFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

export const FilterName = styled.p`
  font-size: 28px;
  color: #424244;
  font-weight: 500;
`;

export const CheckboxLabel = styled.label`
  font-size: 24px;
  color: #424244;
`;

export const Checkbox = styled.input`
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

export const Span = styled.span`
  font-size: 24px;
  color: #424244;
`;

export const StyledLink = styled(Link)`
  color: #ff6700;
  font-size: 18px;
  margin-top: 5px;
`;

export const Line = styled.div`
  background-color: #ff6700;
  height: 2px;
  width: 114px;
  margin-left: 28px;
  margin-top: -20px;
`;
