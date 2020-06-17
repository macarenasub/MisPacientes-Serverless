const express = require('express');
const Patients = require('../models/Patients');

const router = express.Router();

router.get('/', (req, res) => {
  Patients.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  Patients.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post('/', (req, res) => {
  Patients.create(req.body).then((x) => res.status(201).send(x));
});

router.put('/:id', (req, res) => {
  Patients.findByIdAndUpdate(req.params.id, req.body).then((x) => res.status(200).send(x));
});

router.delete('/:id', (req, res) => {
  Patients.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
