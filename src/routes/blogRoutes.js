const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/api/posts", blogController.showAllPosts);
router.get("/api/posts/:id", blogController.showPostByID);
