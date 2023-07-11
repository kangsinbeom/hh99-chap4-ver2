import { StyledListItem } from "./dogListItemStyle";
import { toggleModal } from "../../redux/modules/modal";
import { useDispatch } from "react-redux";
const DogListItem = ({ index, dog, url, dogInfo }) => {
  const { name, life_span } = dogInfo;
  const dispatch = useDispatch();
  const onModalCheckedHandler = () => {
    dispatch(toggleModal());
    console.log("눌리는 중");
  };

  return (
    <StyledListItem url={url}>
      <div className="index">{index + 1}</div>
      <div className="infoGroup">
        <p>{name}</p>
        <p>{life_span}</p>
      </div>
      <div className="imgCircle" onDoubleClick={onModalCheckedHandler}></div>
    </StyledListItem>
  );
};

export default DogListItem;
