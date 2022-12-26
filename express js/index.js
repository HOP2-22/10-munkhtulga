const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Postman");
const User = require("./models/User");
const URI = "mongodb+srv://Deserved2k:tulga2008@cluster0.4kpurtz.mongodb.net/blog"
const PostRouter= require("./router/PostRouter")
const userRouter= require("./router/userRouter")
const port = 8000;
const app = express();
mongoose.connect(URI);

mongoose.connection.once("open", () => {
  console.log('mongodb connected')
})

app.use(express.json());
app.use(userRouter, PostRouter)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

