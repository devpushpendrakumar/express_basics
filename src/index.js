import dotenv from "dotenv";
dotenv.config();

import sequelize from "./db/db.js";
import "./models/student.model.js";

import app from "./app.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // Sync all models with the database
    await sequelize.sync({ force: false }); // Set force to true only if you want to drop and recreate tables
    console.log("All models were synchronized successfully.");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
