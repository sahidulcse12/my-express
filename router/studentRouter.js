const express = require('express')
const { Student } = require('../models/students')
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const router = express.Router();

const studentList = async (req, res) => {
    const students = await Student.find().sort({ name: 1 })
    res.send(students)
}

const newStudent = async (req, res) => {
    const student = new Student(req.body);
    try {
        const data = await student.save();
        res.send(data);
    } catch (err) {
        const errMsg = [];
        for (field in err.errors) {
            errMsg.push(err.errors[field].message);
            return res.status(400).send(errMsg);
        }
    }

}

const studentDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findById(id);
        if (!student) return res.status(404).send('ID not found');
        res.send(student);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

const studentUpdate = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const student = await Student.findByIdAndUpdate(id, updatedData, { new: true, useFindAndModify: false })
        if (!student) return res.status(404).send('ID not found')
        res.send(student);
    } catch (error) {
        return res.status(404).send(error.message);
    }

}

const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(id);
        if (!student) return res.status(404).send('ID not found')
        res.send(student);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

router.route('/')
    .get(studentList)
    .post(newStudent)

router.route('/:id')
    .get(studentDetails)
    .put(studentUpdate)
    .delete([authorize, admin], deleteStudent)

module.exports = router;