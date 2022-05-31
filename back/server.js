const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

const MONGO_URL = `mongodb+srv://admin:${process.env.DB_PASSWORD}@titanic.uuzwe9b.mongodb.net/Titanic?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connexion ready')
})

mongoose.connection.on('error', error => {
    console.error(error);
})

async function startServer(){
    await mongoose.connect(MONGO_URL);

    server.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    })
}

startServer();