import React, { FC } from "react";
import { FlexProps, StyledFlex } from "./styled";

const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex {...props}> {children} </StyledFlex>;
};

export default Flex;
