const mongoose = require("mongoose")
const Schema = mongoose.Schema

const statusSchema = new Schema(
  {
    metadata: {
      lastExecutionDate: String,
      lastExecutionTime: String,
    },
    statuses: {
      keyword: String,
      statusDetail: [
        {
          _id: false,
          phoneNumber: String,
          messagesLeft: String,
        },
      ],
    },
  },
  { timestamps: true }
)

const Status = mongoose.model("statuses", statusSchema)

module.exports = Status
