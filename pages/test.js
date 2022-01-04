import {
  Stack,
  Center,
  IconButton,
  Button,
  Spacer,
  Box,
  useColorMode,
} from "@chakra-ui/react"
import extendTheme from "../theme/index"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

const Test = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center h="80vh" maxW="1200px" mx="auto">
      <Stack isInline>
        <IconButton
          icon={colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          variant="outline"
          colorScheme="cyan"
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>
        <Button variant="solid" colorScheme="green">
          Solid
        </Button>
        <Button variant="primary">Primary Color</Button>
        <Button variant="secondary">Secondary Color</Button>
        <Button variant="secondaryOutline">Warning Color</Button>
      </Stack>
    </Center>
  )
}

export default Test
