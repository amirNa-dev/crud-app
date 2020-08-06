const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const assert = require('assert')
const validator = require('validator');

const { studentsModel } = require('../models/studentsModel');

router.get('/', (req, res) => {
    return studentsModel.find(req.query)
    .then(students => {
        return res.send({
            students_count : students.length,
            students
        });
    })
    .catch(err => {
        throw new Error('Error in db fetch')
    })
});

router.post('/', (req, res) => {

    assert(validator.isEmail(req.body.email), 'EmailisNotValidate')

    let newStudent = new studentsModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role : req.body.role,
    });

    return newStudent.save()
    .then(saved => {
        return res.send(saved)
    })
    .catch(err => {
        throw new Error('Error in saving DB')
    })
});

router.put('/:id', (req, res) => {

    assert(ObjectId.isValid(req.params.id), `No record found for : ${req.params.id}`)

    assert(validator.isEmail(req.body.email), 'EmailisNotValidate')

    var student = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: req.body.role,
    };

    return studentsModel.findByIdAndUpdate(req.params.id, { $set: student }, { new: true })
    .then(updated => {
        return res.send(updated)
    })
    .catch(error => {
        throw new Error('Error in updating DB')
    })
});

router.delete('/:id', (req, res) => {

    assert(ObjectId.isValid(req.params.id), `No record found for : ${req.params.id}`)

    return studentsModel.findByIdAndRemove(req.params.id)
    .then(removed => {
        return res.send(removed)
    })
    .catch(error => {
        throw new Error('Error in updating DB')
    })
});


module.exports = router;