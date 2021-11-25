const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Add a firstname']
    },
    lastName: {
        type: String,
        required: [true, 'Add a lasname']
    },
    username: {
        type: String,
        required: [true, 'Add a username'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Add a password']

    },
    creationDate:{
        type: String,
        default: Date.now()
    }
})

module.exports = mongoose.model('User' , UserSchema);
