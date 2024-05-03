const mongoose = require('mongoose');

const TasksSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'task cannot be empty'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Tasks = mongoose.model('Tasks', TasksSchema);

module.exports = Tasks;