import { Center, Text, Grid, Box, IconButton } from "@chakra-ui/react"
import { GrUpdate } from "react-icons/gr"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

const firstColumn = "120px",
  secondColumn = "30px",
  thirdColumn = "30px",
  tableOutsideColor = "gray.400",
  tableInsideColor = "gray.700"

const StatusColumns = ({
  phoneNumber = "Number",
  messagesLeft = "Interactions\nLeft",
  expiresAt = "Renewed at",
}) => (
  <Grid
    templateColumns="repeat(3, 1fr)"
    gap={6}
    bg={tableOutsideColor}
    fontWeight="semibold"
    color="black"
  >
    <Center minHeight="50px" minWidth={firstColumn}>
      {phoneNumber}
    </Center>
    <Center whiteSpace="pre-wrap" minWidth={secondColumn} textAlign="center">
      {messagesLeft}
    </Center>
    <Center minWidth={thirdColumn}>{expiresAt}</Center>
  </Grid>
)

const ContactStatus = ({
  contact: {
    id,
    credit: { remaining, expiresAt },
  },
}) => (
  <Box py="10px" color="white" bg={tableInsideColor} borderTop="solid 1px">
    <Grid templateColumns="repeat(3, 1fr)" gap={6} minH="20px">
      <Center minWidth={firstColumn}>{id}</Center>
      <Center minWidth={secondColumn} textAlign="center">
        {remaining == 0 ? (
          <Text color="red" fontWeight="bold">
            Aguardar
            <br />
            Renovação
          </Text>
        ) : (
          remaining
        )}
      </Center>
      <Center minWidth={thirdColumn} textAlign="center">
        <Text>
          {expiresAt.match(/\d\d:\d\d/)}
          <br /> {expiresAt.split("T")[0]}
        </Text>
      </Center>
    </Grid>
  </Box>
)

function Status({ contacts, time, date }) {
  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Fetch games when component is mounted
  }, [])
  const router = useRouter()

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const checkData = async () => {
    fetch("/api/status", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json("Updated."))
      .then((result) => console.log(result))
      .catch((err) => console.log("Error while updating."))
  }

  const updateData = async () => {
    fetch("/api/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json("Updated."))
      .catch((err) => console.log("Error while updating."))
    await delay(1000)
    router.push("/updating")
    await delay(4000)
    router.push("/")
  }

  return (
    <Box>
      <IconButton
        icon={<GrUpdate />}
        bg="#fc8181"
        aria-label="Color mode switcher"
        onClick={updateData}
      >
        Switch Mode
      </IconButton>
      <Box paddingY={"10px"}>
        Last updated {date} at {time}
      </Box>
      <StatusColumns />
      {contacts.map((id) => (
        <ContactStatus contact={id} key={id.id} />
      ))}
      <Box h="10px" bg={tableOutsideColor} />
    </Box>
  )
}

export { ContactStatus, StatusColumns, Status }
