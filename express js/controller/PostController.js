const Post = require("../models/Postman");

exports.getPosts = async (request, response) => {
  try {
    const posts = await Post.find();
    response.send(posts);
  } catch (error) {
    response.status().send({ message: error.message });
  }
};
exports.getPostsbyId = async (request, response) => {
  const _id = request.params.id;
  try {
    const posts = await Post.findById({ _id });
    response.send(posts);
  } catch (error) {
    response.status().send({ message: error.message });
  }
};
exports.createPosts = async (request, response) => {
  const posts = request.body;
  try {
    const PostData = await Post.create(posts);
    response.send(PostData);
  } catch (error) {
    response.status(500).send({ message: "Failed to create" + error.message });
  }
};
exports.updatePosts = async (request, response) => {
  const posts = request.body;
  const _id = request.params.id;
  try {
    const PostData = await Post.findByIdAndUpdate({ _id }, posts);
    response.send(PostData);
  } catch (error) {
    response.status(400).send({ message: "Failed to update" + error.message });
  }
};
exports.deletePosts = async (request, response) => {
  const _id = request.params.id;
  const posts = request.body;
  try {
    const deletedPostData = await Post.findByIdAndDelete({ _id }, posts);
    response.send("" + _id);
  } catch (error) {
    response
      .status(400)
      .send({ message: "Failed to delete" + "" + error.message });
  }
};
