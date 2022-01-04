import { Flex, Box } from "@chakra-ui/react"

import { baseUrl, fetchApi } from "../utils/fetchApi"

import { ContactStatus, StatusColumns } from "../components/ContactStatus"

import { SandInfo, SandOverview } from "../components/KeyInfo"

export default function Home({ contacts, channel, keyword, credit }) {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        flexDirection={"column"}
        paddingTop="4"
        paddingBottom="40"
        textAlign={"center"}
        W={"60vw"}
      >
        <Box>
          <StatusColumns />
          {contacts.map((id) => (
            <ContactStatus contact={id} key={id.id} />
          ))}
          <Box h="10px" bg="#f72717" borderBottomRadius="10px" />
        </Box>
        <SandOverview credit={credit} />
        <SandInfo key={"1"} channel={channel} keyword={keyword} />
      </Flex>
    </Flex>
  )
}

export async function getServerSideProps() {
  const zenStatus = await fetchApi(baseUrl).then((response) => {
    return response
  })
  return {
    props: {
      channel: zenStatus?.channel,
      keyword: zenStatus?.keyword,
      contacts: zenStatus?.contacts,
      credit: zenStatus?.credit,
    },
  }
}
