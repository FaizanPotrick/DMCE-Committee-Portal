const express = require("express");
const router = express.Router();
const Contact = require("../schema/ContactSchema");

router.post("/api/contact", async (req, res, next) => {
  const { name, email_address, message } = req.body;
  try {
    await Contact.create({
      name,
      email_address,
      message,
    });
    res
      .status(200)
      .json({ type: "success", message: "Successfully Submitted" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
