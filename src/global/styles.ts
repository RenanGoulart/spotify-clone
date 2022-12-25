import styled from "styled-components/native";
import { width } from "./constants";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 ${width * 0.08}px;

  background-color: ${({ theme }) => theme.colors.black};
`;
