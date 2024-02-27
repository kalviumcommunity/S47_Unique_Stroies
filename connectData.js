const mongoose = require('mongoose');

let mongoServer;
const url = 'mongodb+srv://anuj001:Anuj@2004@cluster0.a9f2sip.mongodb.net/?retryWrites=true&w=majority'

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
