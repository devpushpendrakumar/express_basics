import pool from "../db/db.js";
import apiResponse from "../utils/apiResponse.js";
import apiError from "../utils/apiError.js";

const getAllStudents = async (req, res, next) => {
  try {
    const queryString = `SELECT * FROM students`;
    const [result] = await pool.query(queryString);

    if (result.length === 0) {
      return next(new apiError(404, "No Student found"));
    }

    apiResponse(res, {
      statusCode: 200,
      message: "Students fetched successfully",
      data: result,
    });
  } catch (err) {
    console.error("GetStudents Error:", err);
    next(new apiError(500, "Server error: Unable to fetch students"));
  }
};

const createStudent = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    const queryString = `INSERT INTO students (name, email, age) VALUES (?, ?, ?)`;
    const [result] = await pool.query(queryString, [name, email]);

    const [user] = await pool.query("SELECT * FROM students WHERE id = ?", [
      result.insertId,
    ]);

    apiResponse(res, {
      statusCode: 201,
      message: "Student created successfully",
      data: user[0],
    });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return next(new apiError(400, "Email already exists"));
    }

    console.error("CreateStudent Error:", err);
    next(new apiError(500, "Server error: Unable to create student"));
  }
};

const getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const queryString = `SELECT * FROM students WHERE id = ?`;
    const [result] = await pool.query(queryString, [id]);

    if (result.length === 0) {
      return next(new apiError(404, "Student not found"));
    }

    apiResponse(res, {
      statusCode: 200,
      message: "Student fetched successfully",
      data: result[0],
    });
  } catch (err) {
    console.error("GetStudent Error:", err);
    next(new apiError(500, "Server error: Unable to fetch student"));
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const queryString = `UPDATE students SET name = ? WHERE id = ?`;
    const [result] = await pool.query(queryString, [name, age, id]);

    if (result.affectedRows === 0) {
      return next(new apiError(404, "Student not found"));
    }

    // Optionally, fetch the updated user
    const [updatedStudent] = await pool.query(
      `SELECT * FROM students WHERE id = ?`,
      [id]
    );

    apiResponse(res, {
      statusCode: 200,
      message: "Student updated successfully",
      data: updatedUser[0],
    });
  } catch (err) {
    console.error("UpdateStudent Error:", err);
    next(new apiError(500, "Server error: Unable to update student"));
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const queryString = `DELETE FROM students WHERE id = ?`;
    const [result] = await pool.query(queryString, [id]);

    if (result.affectedRows === 0) {
      return next(new apiError(404, "Student not found"));
    }

    apiResponse(res, {
      statusCode: 200,
      message: "Student deleted successfully",
      data: { deletedId: id },
    });
  } catch (err) {
    console.error("DeleteStudent Error:", err);
    next(new apiError(500, "Server error: Unable to delete student"));
  }
};

export {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
