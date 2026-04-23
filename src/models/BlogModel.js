const mongoose = require("mongoose");

/** @type {mongoose.SchemaDefinition} */
const blogDefinition = {
  title: {
    type: String,
    required: true, // Gõ 'r' ở đây nó sẽ gợi ý required
    minlength: 5, // Gõ 'm' nó sẽ gợi ý minlength
  },
  content: {
    type: String,
    required: true,
  },
  author: String,
  category: String,
  tags: [String],
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  views: {
    type: Number,
    default: 0,
  },
};

const blogSchema = new mongoose.Schema(blogDefinition, { timestamps: true });
blogSchema.statics.showAllPost = async function () {
  return await this.find();
};
blogSchema.statics.showPostById = async function (id) {
  return await this.findById(id);
};
blogSchema.statics.

const Post = mongoose.model("Post", blogSchema);
Post.find;
module.exports = Post;
