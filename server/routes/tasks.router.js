const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controller");

const taskRouter = express.Router();

// @Route GET api/v1/tasks
// @Des get all tasks
// @Access Public
taskRouter.route("/").get(getAllTasks);
taskRouter.route("/").post(createTask);
taskRouter.route("/:id").get(getSingleTask);
taskRouter.route("/:id").delete(deleteTask);
taskRouter.route("/:id").patch(updateTask);

module.exports = taskRouter;
