import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Seach games.."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
