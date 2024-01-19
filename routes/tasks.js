const express = require('express');
const router = express.Router();
//import controllers
const { getAllTasks } = require('../controllers/tasks');

router.get('/', getAllTasks);

module.exports = router;
