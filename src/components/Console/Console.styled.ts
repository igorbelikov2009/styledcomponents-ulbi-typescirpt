import styled from "styled-components";

export interface ConsoleProps {
  color?: string;
}

export const StyledConsole = styled.textarea<ConsoleProps>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none; // наличие resize позовляет менять размер textarea
  color: ${({ color }) => (color ? color : "white")};

  &:focus {
    outline: none;
  }
`;
