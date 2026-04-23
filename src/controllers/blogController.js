const Post = require("../models/BlogModel");

const showAllPosts = async (req, res) => {
  try {
    const query = req.query || "";
    const posts = await Post.showAllPosts(req.query);
    res.status(200).json({ status: "success", data: posts });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const showPostById = async (req, res) => {
  try {
    const post = await Post.showPostById(req.params.id);
    res.status(200).json({ status: "success", data: post });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const saveNewPost = async (req, res) => {
  try {
    await Post.saveNewPost(req.body);
    res.status(201).json({ status: "success", data: req.body });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

const updatePostById = async (req, res) => {
  try {
    await Post.updatePostById(req.params.id, req.body);
    res.status(201).json({ status: "success", data: req.body });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const deletePostById = async (req, res) => {
  try {
    await Post.deletePostById(req.params.id);
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  showAllPosts,
  showPostById,
  saveNewPost,
  updatePostById,
  deletePostById,
};
