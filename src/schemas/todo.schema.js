import mongoose from "mongoose";
const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "Required"],
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "low",
    },
    status: {
      type: String,
      required: [true, "Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todos", todoSchema);
