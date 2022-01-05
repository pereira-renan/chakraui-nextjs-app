import React, { useState, useEffect, useCallback } from "react"
import { getData } from "./api/status"
import { Flex, Box } from "@chakra-ui/react"
import { Status } from "../components/ContactStatus"
import { SandInfo, SandOverview } from "../components/KeyInfo"
import dbConnect from "../lib/dbConnect"

export default function Test({
  contacts,
  channel,
  keyword,
  credit,
  lastExecutionTime,
  lastExecutionDate,
}) {
  return (
    <Flex justifyContent={"center"}>
      <Flex
        flexDirection={"column"}
        paddingTop={"10vh"}
        paddingBottom="40"
        textAlign={"center"}
        w={"40vw"}
      >
        <Status
          contacts={contacts}
          time={lastExecutionTime}
          date={lastExecutionDate}
        />
        <SandOverview credit={credit} />
        <SandInfo key={"1"} channel={channel} keyword={keyword} />
      </Flex>
    </Flex>
  )
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()
  const response = await getData()
  return {
    props: {
      channel: response?.statuses.channel,
      keyword: response?.statuses.keyword,
      contacts: response?.statuses.contacts,
      credit: response?.statuses.credit,
      lastExecutionTime: response?.metadata.lastExecutionTime,
      lastExecutionDate: response?.metadata.lastExecutionDate,
    },
  }
}
