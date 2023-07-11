import { StyledListItem } from "./dogListItemStyle";

const DogListItem = ({ index, dog, url, dogInfo }) => {
  console.log(dogInfo);
  const { name, life_span } = dogInfo;

  return (
    <StyledListItem url={url}>
      <div className="index">{index + 1}</div>
      <div className="infoGroup">
        <p>{name}</p>
        <p>{life_span}</p>
      </div>
      <div className="imgCircle"></div>
    </StyledListItem>
  );
};

export default DogListItem;
