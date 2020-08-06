const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect('mongodb+srv://Egtpostuser:kasldasfbnsdhirfhwoehroiwerju@cluster0.cbikl.mongodb.net/student', {
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    assert(!err, 'Error in DB connection : ' + err)
    console.log('MongoDB connection succeeded.');
});

module.exports = mongoose;