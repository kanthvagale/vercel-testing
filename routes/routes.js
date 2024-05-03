const express = require('express');
const { addTask, getAllTasks, getTask, updateTask, deleteTask } = require('../controllers/controller');
const routes = express.Router();


routes.route('/').get(getAllTasks).post(addTask);
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = routes;