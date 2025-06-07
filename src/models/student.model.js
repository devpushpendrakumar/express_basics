import sequelize from "../db/db.js";

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: true,
  }
);
export default Student;
