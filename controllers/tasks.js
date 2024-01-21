//bring in model to crud our data
const Task = require('../models/Task');

//controllers
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
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

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `task:${taskID}, does not exist` });
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `task:${taskID}, does not exist` });
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    //3 args: condition, pass in new data(which properties your updating), options to run validators and get new values
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `task:${taskID}, does not exist` });
    }
    res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
