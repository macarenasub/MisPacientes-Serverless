const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Doctors = mongoose.model(
  'Doctor',
  new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    enrollment: { type: String, required: true },
    mail: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: String,
  }),
);

module.exports = Doctors;
