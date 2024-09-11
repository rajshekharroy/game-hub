import { HStack, Switch, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
return (
<div className=''>
<HStack>
    <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
</HStack>
</div>
)
}

export default ColorModeSwitch