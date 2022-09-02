const Task = require("../schemas/task");
const errorHandler = require("../utils/error-handler");
const CustomError = require("../utils/custom-error");

const getAllTask = errorHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const createTask = errorHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = errorHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) {
    throw new CustomError(`no task found with this id ${_id}`, 404);
  }
  res.status(200).send({ task });
});

const updateTask = errorHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body);
  if (!task) {
    throw new CustomError(`no task found with this id ${_id}`, 404);
  }
  res.status(200).send({ msg: "updated task" });
});
const deleteTask = errorHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    throw new CustomError(`no task found with this id ${_id}`, 404);
  }
  res.status(200).json({ msg: "deleted task" });
});

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
