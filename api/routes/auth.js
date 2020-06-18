const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Doctors = require('../models/Doctors');

const router = express.Router();

const signToken = (i_d) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 365,
  });
};

router.post('/register', (req, res) => {
  const { username, password } = req - body;
  crypto.randomBytes(16, (err, salt) => {
    const newSalt = salt.toString('base64');
    crypto.pbkdf2(password, newSalt, 10000, 64, 'sha1', (err, key) => {
      const encryptedPassword = key.toString('base64');
      Doctors.findOne({ username })
        .exec()
        .then((doctor) => {
          if (doctor) {
            return res.send('El Doctor ya existe');
          }
          Doctors.create({
            name,
            lastName,
            enrollment,
            mail,
            username,
            password: encryptedPassword,
            salt: newSalt,
          }).then(() => {
            res.send('Doctor creado con éxito');
          });
        });
    });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Doctors.findOne({ username })
    .exec()
    .then((doctor) => {
      if (!doctor) {
        return res.send('Usuario y/o contraseña incorrectos');
      }
      crypto.pbkdf2(password, doctor.salt, 10000, 64, 'sha1', (err, key) => {
        const encryptedPassword = key.toString('base64');
        if (doctor.password === encryptedPassword) {
          const token = signToken(doctor._id);
          return res.send({ token });
        }
        res.send('Usuario y/o contraseña incorrectos');
      });
    });
});

module.exports = router;
