const Post = require("../models/BlogModel");

const showAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ status: "success", data: posts });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const showPostByID = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ status: "success", data: post });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const createNewPost = async (req,res) => {
	try {
		const {title, content, author, category, tags, status} = req.body
		
	}
}

module.exports = { showAllPosts, showPostByID };
