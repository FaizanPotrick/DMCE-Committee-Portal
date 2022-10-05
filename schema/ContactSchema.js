const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: [100, "Name cannot be more than 100 characters"],
      minlength: [3, "Name cannot be less than 3 characters"],
      lowercase: true,
      required: [true, "Name field is required"],
      match: [/^[a-zA-Z ]+$/, (props) => `${props.value} is not a valid name`],
    },
    email_address: {
      type: String,
      trim: true,
      maxlength: [300, "Email Address cannot be more than 300 characters"],
      lowercase: true,
      required: [true, "Email Address field is required"],
      match: [
        /^[\w-\.]+@[A-Za-z]+\.[A-Za-z]{2,4}$/,
        "Please enter a valid email address",
      ],
    },
    message: {
      type: String,
      trim: true,
      required: [true, "Message field is required"],
      maxlength: [1000, "Message cannot be more than 1000 characters"],
      minlength: [10, "Message cannot be less than 10 characters"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.connection
  .useDb("DMCE_Committee_Portal")
  .model("Contact", ContactSchema);
