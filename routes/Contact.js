import express from "express";
import Contact from "../schema/ContactSchema.js";

const router = express.Router();

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

export default router;
