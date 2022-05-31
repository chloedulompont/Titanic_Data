const express = require('express');

const {
    httpGetAllPassengers
} = require('../controllers/passengers.controller');

const passengersRouter = express.Router();

passengersRouter.get('/', httpGetAllPassengers);

module.exports = passengersRouter;