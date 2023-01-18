const express = require("express");
const private = require("../controller/private");
const authorization = require("../middleware/authorization");

const router = express.Router();

router.post("/", authorization, private);

module.exports = router;
