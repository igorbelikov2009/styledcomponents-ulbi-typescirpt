import React, { FC } from "react";
import styled from "styled-components";

interface LineProps {
  children: React.ReactNode;
  color?: string;
}

const StyledLine = styled.div<LineProps>`
  font-size: 24px;
  color: ${({ color }) => (color ? color : "white")};
`;

const Line: FC<LineProps> = (props) => {
  return <StyledLine {...props} />;
};

export default Line;
