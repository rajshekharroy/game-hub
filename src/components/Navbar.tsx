import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <HStack>
        <MdLightMode fontSize="20px" />
        <ColorModeSwitch />
        <MdDarkMode fontSize="20px" />
      </HStack>
    </HStack>
  );
};

export default Navbar;
