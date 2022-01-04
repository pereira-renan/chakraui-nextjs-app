import axios from "axios"

export const baseUrl = process.env.baseUrl

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.customKey}`,
    },
  })

  return data
}
