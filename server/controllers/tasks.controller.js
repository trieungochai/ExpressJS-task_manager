const getAllTasks = (req, res) => {
  return res.send("Get all tasks");
};

const createTask = (req, res) => {
  return res.send("Create task");
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
