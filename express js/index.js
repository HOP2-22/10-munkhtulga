const express = require("express");
const { getUsers, createUser } = require("./controller/user");
const port = 8000;
const app = express();
app.use(express.json());
app.get("/users", getUsers);
app.post("/users", createUser);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});