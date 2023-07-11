import styled from 'styled-components';
import theme from "../../style/theme";


export const StyledListItem = styled.div`
  margin: 20px;
  width: 90%;
  height: 200px;
  border-radius: 50px;
  padding: 25px;
  
  background-color : ${theme.colors.white};
  position: relative;

  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 20px ${theme.colors.darkred};
    transform: translate(-5px, -5px);
  }
  
  

  .index {
    font-size: 32px;
    font-weight: bold;
    background-color: ${theme.colors.lightred};
    color: ${theme.colors.white};
    border-radius: 50px;
    width: 40px;
    height : 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top: 10%;
    padding-bottom: 1%;
    box-shadow : 0 0 5px 0 rgba(0,0,0);
  }

  .imgCircle {
    background-image: url(${props => props.url});
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    
  }

  .infoGroup {
    display: flex;
    flex-direction: column;
    color: ${theme.colors.darkred};
    font-weight : 800;
    font-size: 28px;
    padding-left: 10%;
    >*{
      margin-top: 10px;
    }
  }


  `;