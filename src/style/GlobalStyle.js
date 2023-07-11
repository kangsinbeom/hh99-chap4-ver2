import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    /* border-box인 이유는 border부분도 내가 원하는 크기 안으로 들어간다 */
    box-sizing: border-box;
    background-color : ${theme.colors.white};
    
  }

`;
export default GlobalStyle;