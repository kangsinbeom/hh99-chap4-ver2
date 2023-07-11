import styled from "styled-components";
import theme from "../../style/theme";
import DogList from "../../components/list/DogList";

const Main = () => {
  return (
    <StyledMain>
      <DogList />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
