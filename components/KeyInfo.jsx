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
    <Popover id={"details"} trigger="hover" colorScheme="red">
      <PopoverTrigger>
        <Button colorScheme="red">?</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow bg="red.400" />
          <PopoverBody borderRadius={"5px"} bg="red.400" color="white">
            <Center px="10">
              {keyword}
              <Spacer />
              <Button
                bg="gray.200"
                onClick={() => {
                  navigator.clipboard.writeText(keyword)
                }}
              >
                <MdContentCopy color="black" />
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
    There are {remaining < 0 ? "no" : "no"} overall interactions left, this
    limit will be renewed by {expiresAt.split("T")[0]} at{" "}
    {expiresAt.match(/\d\d:\d\d/)}.
  </Box>
)

export { SandInfo, SandOverview }
