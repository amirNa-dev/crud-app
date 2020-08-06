const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    role: {type: String, required: true }
},
{
    timestamps: true
});

const studentsModel = mongoose.model("student", student);

module.exports = { studentsModel };