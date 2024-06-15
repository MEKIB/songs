import styled from "@emotion/styled";
import {
  space,
  layout,
  typography,
  color,
  border,
  shadow,
} from "styled-system";
export const Container = styled.div`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${shadow}
`;
export const Heading = styled.h1`
  ${typography}
  ${color}
text-align:center;
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  marin: 20px 0;
  gap: 15px;
`;
export const Input = styled.input`
  ${border}
  ${layout}
${space}
${typography}
`;
export const Button = styled.button`
  ${border}
  ${layout}
${space}
${typography}
${color}
cursor:pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
export const List = styled.ul`
  ${space}
  list-style-type:none;
  padding: 0;
`;
export const ListItem = styled.li`
  ${space}
  ${layout}
${border}
${shadow}
display:flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
`;
export const ListItemText = styled.span`
  flex-grow: 1;
  text-align: left;
`;
