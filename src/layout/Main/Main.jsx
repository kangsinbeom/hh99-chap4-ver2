import styled from "styled-components";
import theme from "../../style/theme";
import DogList from "../../components/list/DogList";
import ModalPortal from "../../components/modal/ModalPortal";
const Main = () => {
  return (
    <StyledMain>
      <DogList />
      <ModalPortal />
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
