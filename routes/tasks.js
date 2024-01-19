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

router.get('/api/v1/:id', getTask);
router.patch('/api/v1/:id', updateTask);
router.delete('/api/v1/:id', deleteTask);

module.exports = router;
