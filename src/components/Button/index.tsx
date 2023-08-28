import React, { FC } from "react";
import { ButtonProps, StyledButton } from "./styled";

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
