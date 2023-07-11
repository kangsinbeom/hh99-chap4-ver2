import { useQuery } from "react-query";
import DogListItem from "../listItem/DogListItem";
import { StyledList } from "./dogListStyle";
import { getDogs } from "../../apis/api";
const DogList = () => {
  const { isLoading, isError, data } = useQuery("dogs", getDogs);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error :</p>;
  }
  return (
    <StyledList>
      {data.map((dog, index) => (
        <DogListItem
          key={dog.id}
          index={index}
          dog={dog.breeds}
          url={dog.url}
          dogInfo={dog.breeds[0]}
        />
      ))}
    </StyledList>
  );
};

export default DogList;
