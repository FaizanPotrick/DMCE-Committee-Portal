import express from "express";
import Event from "../schema/EventSchema.js";
import User from "../schema/UserSchema.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const router = express.Router();

router.post("/api/event/registration", async (req, res, next) => {
  const token = req.cookies.token;
  const { event_name, tag, committee, date, time, venue, mode } = req.body;
  try {
    if (!token) {
      return res.status(400).json({
        type: "error",
        message: "Unauthorized access",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (req.session.user_id !== decoded.user_id) {
      return res.status(400).json({
        type: "error",
        message: "Unauthorized access",
      });
    }
    await Event.create({
      user_id: decoded.user_id,
      event_name,
      tag,
      committee,
      date,
      time,
      venue,
      mode,
    });

    res
      .status(200)
      .json({ type: "success", message: "Successfully Registered the Event" });
  } catch (err) {
    next(err);
  }
});

router.get("/api/dashboard", async (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const response = await User.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(decoded.user_id),
      },
    },
    {
      $lookup: {
        from: "events",
        localField: "_id",
        foreignField: "user_id",
        as: "events",
      },
    },
    {
      $project: {
        user_name: 1,
        email_address: 1,
        events: 1,
      },
    },
  ]);
  res.status(200).json(response[0]);
});

export default router;
