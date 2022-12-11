require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/ErrorHandler");
const session = require("express-session");
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
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(require("./routes/User.js"));
app.use(require("./routes/Event.js"));
app.use(require("./routes/Contact.js"));
app.use(ErrorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(process.env.PORT || 8000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 8000}`);
});
