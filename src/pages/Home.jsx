import Header from "../layout/Header/Header";
import styled from "styled-components";
import Main from "../layout/Main/Main";
const Home = () => {
  return (
    <HomeBox>
      <Header />
      <Main />
    </HomeBox>
  );
};

export default Home;

const HomeBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
