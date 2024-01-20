const express = require('express');
const router = express.Router();

//import controllers
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require('../controllers/tasks');

router.get('/', getAllTasks);
router.post('/', createTask);

router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
