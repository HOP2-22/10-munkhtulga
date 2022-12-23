const express = require("express");
const mongoose = require("mongoose")
const URI = "mongodb+srv://Deserved2k:tulga2008@cluster0.4kpurtz.mongodb.net/blog"

const port = 8000;
const app = express();
mongoose.connect(URI);

mongoose.connection.once("open", () => {
  console.log('mongodb connected')
})

app.use(express.json());
app.get('/getalluser', (request, response) => {

  response.send("get all user" )
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
