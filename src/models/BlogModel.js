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
blogSchema.statics.showAllPosts = async function (query) {
  return await this.find(query);
};
blogSchema.statics.showPostById = async function (id) {
  return await this.findById(id);
};
blogSchema.statics.saveNewPost = async function (post) {
  const newPost = new this(post);
  return await newPost.save();
};
blogSchema.statics.updatePostById = async function (id, updateData) {
  return await this.findByIdAndUpdate(id, updateData, { new: true });
};
blogSchema.statics.deletePostById = async function (id) {
  return await this.findByIdAndDelete(id);
};
const Post = mongoose.model("Post", blogSchema);

module.exports = Post;
