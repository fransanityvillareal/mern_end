export const validateStudent = (req, res, next) => {
  const { name, course, id, email } = req.body;
  if (!name || !course || !id || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }
  next();
}