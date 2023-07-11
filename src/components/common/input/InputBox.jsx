import { StyledInput } from "./inputBoxStyle";
import useInput from "../../../hooks/useInput";
const SearchInput = () => {
  const [value, onChnageHandler] = useInput();

  return <StyledInput value={value} onChange={onChnageHandler} />;
};

const Input = { SearchInput };
export default Input;
