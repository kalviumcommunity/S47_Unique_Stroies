const mongose = require('mongoose')

const UserSchema = new mongose.Schema({
    title: String,
    author: String,
    PlaceOfOrigin: String,
    Description: String

})

const UserModel = mongose.model('UniqueStroies', UserSchema)

module.exports = UserModel