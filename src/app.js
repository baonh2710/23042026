const express = require("express");
const routes = require("./routes/blogRoutes");
const connectMongoDB = require("./config/mongodb");
const app = express();

app.use(express.json());
app.use("/", routes);

connectMongoDB();
