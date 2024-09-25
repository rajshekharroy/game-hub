import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="contain" />
      </Link>
      <SearchInput />
      <HStack>
        <MdLightMode fontSize="20px" />
        <ColorModeSwitch />
        <MdDarkMode fontSize="20px" />
      </HStack>
    </HStack>
  );
};

export default Navbar;
