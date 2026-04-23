const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/api/posts", blogController.showAllPosts);
router.get("/api/posts/:id", blogController.showPostById);
router.post("/api/posts", blogController.saveNewPost);
router.put("/api/posts/:id", blogController.updatePostById);
router.delete("/api/posts/:id", blogController.deletePostById);

module.exports = router;
