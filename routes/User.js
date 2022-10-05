const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schema/UserSchema");
const jwt = require("jsonwebtoken");

router.post("/api/registration", async (req, res, next) => {
  const {
    user_name: { first_name, middle_name, last_name },
    email_address,
    phone_no,
    gr_no,
    password,
  } = req.body;
  try {
    const user_response = await User.create({
      user_name: {
        first_name,
        middle_name,
        last_name,
      },
      email_address,
      phone_no,
      gr_no,
      password: await bcrypt.hash(password, 10),
    });
    req.session.user_id = user_response._id;
    const token = jwt.sign(
      {
        user_id: user_response._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );
    res
      .cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json({ type: "success", message: "Successfully Registered" });
  } catch (err) {
    next(err);
  }
});

router.put("/api/login", async (req, res) => {
  const { email_address, password } = req.body;
  try {
    const user_response = await User.findOne({
      email_address: email_address,
    });
    if (user_response === null) {
      return res
        .status(400)
        .json({ type: "error", message: "Invalid Credential" });
    }
    const passwordMatch = await bcrypt.compare(
      password,
      user_response.password
    );
    if (!passwordMatch) {
      return res
        .status(400)
        .json({ type: "error", message: "Invalid Credential" });
    }
    req.session.user_id = user_response._id;
    const token = jwt.sign(
      {
        user_id: user_response._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );
    res
      .cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json({ type: "success", message: "Successfully Logged In" });
  } catch (err) {
    next(err);
  }
});

router.delete("/api/logout", async (req, res) => {
  req.session.destroy();
  res.clearCookie("token").clearCookie("connect.sid").status(200).json({
    type: "success",
    message: "Successfully Logged Out",
  });
});

router.get("/api/authentication", async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    req.session.destroy();
    return res.clearCookie("token").clearCookie("connect.sid").send(false);
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (req.session.user_id !== decoded.user_id) {
    return res.clearCookie("token").clearCookie("connect.sid").send(false);
  }
  res.send(true);
});

module.exports = router;
