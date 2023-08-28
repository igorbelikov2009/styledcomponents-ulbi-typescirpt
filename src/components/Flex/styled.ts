import styled from "styled-components";

export interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  children: React.ReactNode;
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ align }) => (align ? align : "stretch")};
  justify-content: ${({ justify }) => (justify ? justify : "stretch")};
  margin: ${({ margin }) => (margin ? margin : "0")};
`;
