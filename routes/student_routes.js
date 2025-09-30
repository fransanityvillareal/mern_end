import express from "express";
import { getAllStudents, addStudent, getStudentById, updateStudent, deleteStudent } from "../controllers/student_controller.js";
import { validateStudent } from "../validators/student_validator.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", validateStudent, async (req, res) => {
  try {
    const created = await addStudent(req.body);
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", validateStudent, async (req, res) => {
  try {
    const updated = await updateStudent(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Student not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await deleteStudent(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
