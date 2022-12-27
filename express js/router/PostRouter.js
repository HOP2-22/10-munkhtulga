const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  getPostsbyId,
  updatePosts,
  deletePosts,
} = require("../controller/PostController");

router
  .get("/posts", getPosts)
  .get("/posts/:id", getPostsbyId)
  .post("/posts/create", createPosts)
  .put("/posts/:id", updatePosts)
  .delete("/posts/:id", deletePosts);

module.exports = router;
