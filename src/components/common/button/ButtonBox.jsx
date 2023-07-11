import styled from "styled-components";
const PrimaryButton = () => {
  return <StyledButton></StyledButton>;
};
const ButtonBox = { PrimaryButton };
export default ButtonBox;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 10px 20px;
  margin: 8px;
`;
