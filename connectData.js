const mongoose = require('mongoose');

let mongoServer;
const url = 'mongodb+srv://anujsahu:1MBDz4bok7B5Ixug@cluster0.qomzy21.mongodb.net/?retryWrites=true&w=majority'

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
