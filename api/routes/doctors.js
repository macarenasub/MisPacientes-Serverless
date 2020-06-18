const express = require('express');
const isAuthenticated = require('../auth');

const router = express.Router();

router.get('/', (req, res) => {
  Doctors.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
  Doctors.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post('/', isAuthenticated, (req, res) => {
  Doctors.create(req.body).then((x) => res.status(201).send(x));
});

router.put('/:id', isAuthenticated, (req, res) => {
  Doctors.findByIdAndUpdate(req.params.id, req.body).then((x) => res.status(200).send(x));
});

router.delete('/:id', isAuthenticated, (req, res) => {
  Doctors.findOneAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
