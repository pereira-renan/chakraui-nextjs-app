import {
  Center,
  Spacer,
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react"
import { MdContentCopy } from "react-icons/md"

const SandInfo = ({ keyword }) => (
  <Box>
    <Popover colorScheme="red">
      <PopoverTrigger>
        <Button colorScheme="red">?</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody bg="#fc8181" color="white">
            <Center px="10">
              {keyword}
              <Spacer />
              <Button
                bg="#fc8181"
                onClick={() => {
                  navigator.clipboard.writeText(keyword)
                }}
              >
                <MdContentCopy />
              </Button>
            </Center>
          </PopoverBody>
          <PopoverCloseButton />
        </PopoverContent>
      </Portal>
    </Popover>
  </Box>
)

const SandOverview = ({ credit: { remaining, expiresAt } }) => (
  <Box py={"20px"}>
    There are {remaining} interactions left, this limit will be renewed by{" "}
    {expiresAt.split("T")[0]} at {expiresAt.match(/\d\d:\d\d/)}.
  </Box>
)

export { SandInfo, SandOverview }
