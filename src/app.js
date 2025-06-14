import express from "express";
import getUsers from "./controllers/user.controllers.js";
import router from "./routes/student.routes.js";
import errorMiddleware from "./middleware/apiErrorResponse.js";
import Student from "./models/student.model.js";

const StudentModel = new Student();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, This is home page!");
});

// using parameters and query in the URL
app.get("/user", getUsers);

// using router for student routes
app.use("/students", router);

// Middleware to handle errors
app.use(errorMiddleware);

export default app;
