const express = require("express");
const router = express.Router();
const { createUrl, getUrl } = require("../controller/url");

router.post("/create", createUrl).get("/:id", getUrl);

module.exports = router;
