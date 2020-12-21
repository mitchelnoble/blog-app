//server!!
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const postsRoutes = require("./routes/posts");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", postsRoutes); //for other developers to know that its an api not an app. gives you the version. this must be put before posts: /api/posts

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
