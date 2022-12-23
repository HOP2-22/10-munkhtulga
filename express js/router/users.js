const express = require("express");
const router = express.Router();
const {
    getUsers,
    addUser,
    deleteUser,
    getUserbyID,
}=require("../controller/user");

router
.get("/", getUsers)
.post("/", addUser)
.get("/:userId", getUserbyID)
.delete("/", deleteUser);

module.exports = router;