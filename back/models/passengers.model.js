const passengersModel = require('./passengers.mongo');

async function getAllPassengers(){
    const passengers = passengersModel.find().sort('PassengerId');
    console.log(passengers)
    return passengers
}

module.exports = {
    getAllPassengers
}