import dotenv from "dotenv";
import sequelize from "./db/db.js";
dotenv.config();
import app from "./app.js";
import { Sequelize } from "sequelize";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log("Database connected successfuly");

    // Sync all models with the database
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Start the server
start();
