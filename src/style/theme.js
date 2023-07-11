const colors = {
  darkred: "#512D38",
  lightred: "#B27092",
  pink: "#F4BFDB",
  ivory: "#FFE9F3",
  white: "#F6FFF8",
};

//자주 사용하는 display
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

//객체로 반환
const theme = {
  colors,
  common,
};

export default theme;
