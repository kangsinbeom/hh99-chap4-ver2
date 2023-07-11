import styled from "styled-components";
import Input from "../../components/common/input/InputBox";
import theme from "../../style/theme";
import Button from "../../components/common/button/ButtonBox";
import Icon from "../../assets/icons";
const Header = () => {
  return (
    <Container>
      <Icon.Bomb />
      <Input.SearchInput />
      <Button.PrimaryButton />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;

  /* 100%인데 왜 화면을 꽉채우지 않지?? */
  top: 0;
  background-color: ${theme.colors.lightred};
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 1);
`;
