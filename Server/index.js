const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const app = express();
const path = require("path");
//connect Database
connectDB();
//Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/users", require("./api/users"));
app.use("/api/auth", require("./api/auth"));
app.use("/api/tasks", require("./api/posts"));


//serve static assets in production

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started ${PORT}`));