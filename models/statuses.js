import mongoose from "mongoose"

const StatusSchema = new mongoose.Schema({
  metadata: {
    lastExecutionDate: String,
    lastExecutionTime: String,
    timeElapsed: String,
  },
  statuses: {
    channel: String,
    keyword: String,
    credit: {
      remaining: Number,
      expiresAt: String,
    },
    contacts: [
      {
        _id: false,
        id: String,
        credit: {
          remaining: Number,
          expiresAt: String,
        },
      },
    ],
  },
})

export default mongoose.models.Status || mongoose.model("Status", StatusSchema)
