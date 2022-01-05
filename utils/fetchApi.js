import axios from "axios"
import Status from "../models/statuses"

const url = process.env.baseUrl
var data = {}

export const fetchApi = async () => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.customKey}`,
    },
  })

  return data
}
