import React, { FC } from "react";
import { StyledTitle, TitleProps } from "./styled";

const Title: FC<TitleProps> = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
