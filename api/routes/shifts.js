const express = require('express');
const isAuthenticated = require('../auth');

const router = express.Router();

router.get('/', (req, res) => {
  Shifts.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  Shifts.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post('/', isAuthenticated, (req, res) => {
  const { _id } = req.doctor;
  Shifts.create({ ...req.body, doctor_id: _id }).then((x) => res.status(201).send(x));
});

router.put('/:id', isAuthenticated, (req, res) => {
  Shifts.findByIdAndUpdate(req.params.id, req.body).then((x) => res.status(200).send(x));
});

router.delete('/:id', isAuthenticated, (req, res) => {
  Shifts.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
