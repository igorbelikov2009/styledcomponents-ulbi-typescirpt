import React, { FC } from "react";
import { StyledTitle, TitleProps } from "./Title.styled";

// const Title: FC<TitleProps> = ({ color, children }) => {
//   return <StyledTitle color={color}> {children} </StyledTitle>;
// };

const Title: FC<TitleProps> = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
