import styled from "styled-components";
import theme from "../../../style/theme";


export const StyledInput = styled.input`
  /* size */
  height: 50px;
  width: 100%;
  max-width: 400px;
  min-width: 200px;

  border-radius: 20px;
  border: 2px solid ${theme.colors.pink};
  outline: none;
  padding: 0 20px;

  /* color */
  background-color: ${theme.colors.ivory};
  color: ${theme.colors.darkred};
  font-size: 24px;

  /* action */
  &:hover {
    border: 5px solid ${theme.colors.pink};
  }
  &:focus {
    border: 5px solid ${theme.colors.pink};
  }
`;