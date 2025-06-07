import { Router } from "express";
const router = Router();
import {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controllers.js";

// Define routes for student operations
router.get("/", getAllStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

// Export the router
export default router;
