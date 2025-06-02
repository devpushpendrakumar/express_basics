import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, This is home page!");
});

// using parameters and query in the URL
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  const query = req.query;
  console.log("Query parameters:", query);
  res.send(
    `Hello, ${username}! Welcome to your profile page. Your age is ${query.age} and you are ${query.role}.`
  );
});

export default app;
