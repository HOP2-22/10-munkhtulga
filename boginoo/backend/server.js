const express = require("express");
const connect = require("./database");
const router = require("./routes/authorize");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const PORT = process.send.PORT || 6900;

const app = express();
app.use(cors());
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once("open", () => {
  console.log("mongodb connected");
});

connect();
app.use(express.json());
app.use("/auth", router);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
