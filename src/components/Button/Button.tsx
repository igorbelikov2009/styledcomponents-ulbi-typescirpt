import React, { FC } from "react";
import { ButtonProps, StyledButton } from "./Button.styled";

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
