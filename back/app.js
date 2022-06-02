const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');

const passengerRouter = require('./routes/passengersRouter');
const { login } = require('./controllers/common.controller')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use('/passengers', passengerRouter);
app.post('/login', login)

module.exports = app;