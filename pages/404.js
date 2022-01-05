import { Flex, Box } from "@chakra-ui/react"

export default function notFound({}) {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        flexDirection={"column"}
        paddingTop={"10vh"}
        paddingBottom="40"
        textAlign={"center"}
        w={"60vw"}
      >
        404 - Page not found
      </Flex>
    </Flex>
  )
}
