const {
    getAllPassengers
} = require('../models/passengers.model');

async function httpGetAllPassengers(req, res){
    return res.status(200).json(await getAllPassengers())
}

module.exports = {
    httpGetAllPassengers
}