// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default async function handler(req, res) {
  let data = await axios
    .get("https://viacep.com.br/ws/01001000/json/")
    .then((response) => {
      return response.data
    })
  res.json(data)
}
