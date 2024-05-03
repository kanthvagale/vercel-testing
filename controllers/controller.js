const mongoose = require('mongoose');
const Tasks = require('../model/DBmodel');

const getAllTasks = async (req, res) => {
    const allTasks = await Tasks.find({});
    res.json({ tasks: allTasks });
}
const getTask = async (req, res) => {
    const { id } = req.params;
    const task = await Tasks.findOne({ _id: id })
    console.log(task);
    res.json({ task });
}
const addTask = async (req, res) => {
    const { name, completion } = req.body;
    const task = await Tasks.create({ name, completed: completion });
    res.send({ task });
}
const updateTask = async (req, res) => {
    const { name, completed } = req.body;
    const { id } = req.params;
    const task = await Tasks.findOneAndUpdate({ _id: id },
        { name, completed },
        { new: true, runValidators: true });
    console.log(name, completed);
    res.json({ task });
}
const deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await Tasks.deleteOne({ _id: id });
    // console.log(id);
    res.json(task);
}

module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}