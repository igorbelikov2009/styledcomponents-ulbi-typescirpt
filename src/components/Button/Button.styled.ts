import styled, { keyframes } from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  align?: string;
  primary?: string;
  color?: string;
  background?: string;
}

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`;

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }

  align-self: ${({ align }) => (align ? align : "stretch")};
  color: ${({ color }) => (color ? color : "white")};
  background: ${({ background }) => (background ? background : "white")};
`;
