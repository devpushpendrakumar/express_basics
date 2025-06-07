import dotenv from "dotenv";
import pool from "./db/db.js";
dotenv.config();
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // Test database connection
    const [test] = await pool.query("SELECT 1");
    console.log("Database connected successfuly");

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
