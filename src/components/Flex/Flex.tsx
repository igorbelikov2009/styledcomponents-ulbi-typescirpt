import React, { FC } from "react";
import { FlexProps, StyledFlex } from "./Flex.styled";

const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex {...props}> {children} </StyledFlex>;
};

export default Flex;
