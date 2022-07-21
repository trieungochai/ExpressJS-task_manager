const Task = require("../models/Task.model");

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

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ success: true, tasks });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task)
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });

    return res.status(200).json({ success: true, task });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
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
