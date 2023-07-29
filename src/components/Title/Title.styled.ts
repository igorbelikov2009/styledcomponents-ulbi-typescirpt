import styled from "styled-components";

export interface TitleProps {
  children: React.ReactNode;
  color: string;
}
export const StyledTitle = styled.h1`
  color: ${(props) => props.color};
`;
