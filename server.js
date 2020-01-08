const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const schools = require("./routes/api/schools");
const payments = require("./routes/api/payments");

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "SchoolImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

app.use(multer().single("image"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const db = require("./config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/schools", schools);
app.use("/api/payments", payments);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("/client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server is listening on port ${port}`));
