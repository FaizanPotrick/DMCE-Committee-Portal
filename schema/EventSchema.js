const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User id field is required"],
    },
    event_name: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Event field is required"],
    },
    tag: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Tag field is required"],
    },
    committee: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Committee field is required"],
    },
    date: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Date field is required"],
    },
    time: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Time field is required"],
    },
    venue: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Venue field is required"],
    },
    mode: {
      type: String,
      enum: ["online", "offline"],
      required: [true, "Mode field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.connection
  .useDb("DMCE_Committee_Portal")
  .model("Event", EventSchema);
