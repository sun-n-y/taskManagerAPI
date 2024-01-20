//bring in model to crud our data
const Task = require('../models/Task');

//controllers
const getAllTasks = (req, res) => {
  res.send('get all tasks');
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json(req.params);
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
