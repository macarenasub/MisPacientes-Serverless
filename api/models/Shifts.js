const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Shifts = mongoose.model(
  'Shift',
  new Schema({
    patient_id: { type: Schema.Types.ObjectId, ref: 'Patient' },
    doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    date: { type: Date },
  }),
);

module.exports = Shifts;
