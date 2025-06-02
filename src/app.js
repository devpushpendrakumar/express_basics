import express from "express";
import getUsers from "./controllers/user.controllers.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, This is home page!");
});

// using parameters and query in the URL
app.get("/user", getUsers);

export default app;
