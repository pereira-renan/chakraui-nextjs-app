import axios from "axios"
import Status from "../../models/statuses"
import dbConnect from "../../lib/dbConnect"

const url = process.env.baseUrl
var zenStatus,
  metadata,
  statuses = {}

export async function getData() {
  const status = await Status.findOne({}, { _id: 0 }).lean()
  return status
}

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()
  switch (method) {
    case "GET":
      try {
        const status = await getData()
        res.status(200).json({ success: true, data: status })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case "POST":
      try {
        var begin = Date.now()
        var lastExecutionDate = new Date()
          .toLocaleString("pt-BR", { timeZone: "Brazil/Brasilia" })
          .slice(0, 10)
          .replace(/-/g, "/")
        var lastExecutionTime = new Date()
          .toLocaleString("pt-BR", {
            timeZone: "Brazil/Brasilia",
          })
          .ToString("HH:mm:ss")

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
            console.log("Scrapping data successfully inserted into DB.")
          })
          .catch((err) => {
            console.log(err)
          })

        res.status(200).json({ success: true, data: zenStatus })
      } catch (error) {
        res.status(400).json({ success: false })
      }
  }
}
