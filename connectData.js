


const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.string

const startDatabase = async () => {
  await mongoose.connect(url)

};

const stopDatabase = async () => {

  mongoose.disconnect() 
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
