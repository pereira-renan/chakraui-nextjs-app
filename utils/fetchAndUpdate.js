import axios from "axios"
import Status from "../models/statuses"
import dbConnect from "../lib/dbConnect"

const url = process.env.baseUrl
var zenStatus,
  metadata,
  statuses = {}

export const fetchAndUpdate = async () => {
  await dbConnect()
  var begin = Date.now()
  var lastExecutionDate = new Date()
    .toLocaleDateString()
    .slice(0, 10)
    .replace(/-/g, "/")
  var lastExecutionTime = new Date().toLocaleTimeString()

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.customKey}`,
    },
  })

  var channel = data.channel
  var keyword = data.keyword
  var remaining = data.credit.remaining
  var expiresAt = data.credit.expiresAt
  var allContacts = data.contacts

  const contacts = []
  for (let i = 0; i < allContacts.length; i++) {
    var id = allContacts[i].id
    var remaining = allContacts[i].credit.remaining
    var expiresAt = allContacts[i].credit.expiresAt
    var credit = {
      remaining,
      expiresAt,
    }
    contacts.push({
      id,
      credit,
    })
  }

  credit = {
    remaining,
    expiresAt,
  }

  statuses = {
    channel,
    keyword,
    credit,
    contacts,
  }

  var end = Date.now()
  var timeElapsed = (end - begin) / 1000 + " secs"

  metadata = {
    lastExecutionDate,
    lastExecutionTime,
    timeElapsed,
  }

  zenStatus = {
    metadata,
    statuses,
  }

  await Status.deleteMany({})

  const statusesDB = new Status(zenStatus)
  statusesDB
    .save()
    .then((res) => {
      console.log("Done.")
    })
    .catch((err) => {
      console.log(err)
    })

  return zenStatus
}
