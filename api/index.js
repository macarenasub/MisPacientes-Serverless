const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patients = require('./routes/patients');
const doctors = require('./routes/doctors');
const shifts = require('./routes/shifts');
const app = express();

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send({ message: 'Mis Pacientes API' });
});

app.use('/patients', patients);
app.use('/doctors', doctors);
app.use('/shifts', shifts);

module.exports = app;
