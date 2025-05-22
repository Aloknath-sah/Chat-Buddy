import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationSchema);
