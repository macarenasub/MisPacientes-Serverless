const jwt = require('jsonwebtoken');
const Doctors = require('../models/Doctors');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    const { _id } = decoded;
    Doctors.findOne({ _id })
      .exec()
      .then((doctor) => {
        req.doctor = doctor;
        next();
      });
  });
};
