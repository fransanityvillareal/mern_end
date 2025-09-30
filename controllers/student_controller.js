import Student from "../models/student.js";

// get all students
const getAllStudents = async () => {
  return await Student.find();
}

// add student
const addStudent = async (data) => {
  const newStudent = new Student(data);
  return await newStudent.save();
}

// get student
const getStudentById = async (id) => {
  return await Student.findOne({ id });
}

// update student
const updateStudent = async (id, data) => {
  return await Student.findOneAndUpdate({ id }, data, { new: true });
}

// delete student
const deleteStudent = async (id) => {
  return await Student.findOneAndDelete({ id });
}

export {
  getAllStudents,
  addStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
