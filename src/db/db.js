import dotenv from "dotenv";
dotenv.config(); // ⬅️ ensure it's here

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false,
  }
);

export default sequelize;

// import mysql from "mysql2/promise";
// import dotenv from "dotenv";
// dotenv.config();

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   connectionLimit: 10,
// });

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     process.exit(1);
//   } else {
//     console.log("Connected to the database successfully.");
//     connection.release();
//   }
// });

// export default pool;
