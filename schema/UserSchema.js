const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      first_name: {
        type: String,
        trim: true,
        maxlength: [100, "Name cannot be more than 100 characters"],
        minlength: [3, "Name cannot be less than 3 characters"],
        required: [true, "Name field is required"],
        lowercase: true,
        match: [/^[a-zA-Z]+$/, (props) => `${props.value} is not a valid name`],
      },
      middle_name: {
        type: String,
        trim: true,
        maxlength: [100, "Name cannot be more than 100 characters"],
        minlength: [3, "Name cannot be less than 3 characters"],
        lowercase: true,
        required: [true, "Name field is required"],
        match: [/^[a-zA-Z]+$/, "Please enter a valid middle name"],
      },
      last_name: {
        type: String,
        trim: true,
        maxlength: [100, "Name cannot be more than 100 characters"],
        minlength: [3, "Name cannot be less than 3 characters"],
        lowercase: true,
        required: [true, "Name field is required"],
        match: [/^[a-zA-Z]+$/, "Please enter a valid last name"],
      },
    },
    email_address: {
      type: String,
      trim: true,
      maxlength: [300, "Email Address cannot be more than 300 characters"],
      lowercase: true,
      unique: true,
      required: [true, "Email Address field is required"],
      match: [
        /^[\w-\.]+@[A-Za-z]+\.[A-Za-z]{2,4}$/,
        "Please enter a valid email address",
      ],
    },
    phone_no: {
      type: String,
      required: [true, "Phone no. field is required"],
      match: [/^[0-9]{10}$/, "Please enter a valid phone no."],
    },
    gr_no: {
      type: String,
      trim: true,
      minlength: [11, "GR no. cannot be less than 11 characters"],
      maxlength: [11, "GR no. cannot be more than 11 characters"],
      unique: true,
      required: [true, "GR no. field is required"],
      match: [/^[0-9]{4}[A-Z]{4}[0-9]{3}$/, "Please enter a valid GR no."],
    },
    password: {
      type: String,
      required: [true, "Password field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.connection
  .useDb("DMCE_Committee_Portal")
  .model("User", UserSchema);
