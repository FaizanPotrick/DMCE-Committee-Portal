import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import ErrorHandler from "./middleware/ErrorHandler.js";
import session from "express-session";
import User from "./routes/User.js";
import Event from "./routes/Event.js";
import Contact from "./routes/Contact.js";

const app = express();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch(() => console.log("Error Connecting to Database"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(process.cwd(), "./client/dist")));
app.use(User);
app.use(Event);
app.use(Contact);
app.use(ErrorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "client", "dist", "index.html"));
  });
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 8000}`);
});
