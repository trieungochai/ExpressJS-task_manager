const Task = require("../models/Task.model");

const getAllTasks = (req, res) => {
  return res.send("Get all tasks");
};

const createTask = async (req, res) => {
  const { name, completed } = req.body;
  if (!name)
    return res.status(400).json({
      success: false,
      message: "Task name is required",
    });

  try {
    const newTask = new Task({ name, completed: completed || false });
    await newTask.save();
    return res
      .status(201)
      .json({ success: true, message: "Successfully created", task: newTask });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getSingleTask = (req, res) => {
  return res.send("Get single task");
};

const updateTask = (req, res) => {
  return res.send("Update task");
};

const deleteTask = (req, res) => {
  return res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  deleteTask,
  updateTask,
};
