const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patients = mongoose.model(
  'Patient',
  new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date },
    phone: { type: String },
  }),
);

module.exports = Patients;
