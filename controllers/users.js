const User = require('../models/user');
exports.getUsers = ('/', (req, res, next) =>{
    res.status(200).json({sucess: true, msg: "Show all users"});
})

exports.getUser = ('/:id', (req, res, next) =>{
    res.status(200).json({sucess: true, msg: `Show user ${req.params.id}`});
})

exports.createUser = async (req, res, next) =>{
    const user = await User.create(req.body)
    res.status(201).json({sucess: true, data: user});
    console.log('Succesfull add');
}

exports.updateUser = ('/:id', (req, res, next) =>{
    res.status(200).json({sucess: true, msg: `Update user ${req.params.id}`});
})

exports.deleteUser = ('/:id', (req, res) =>{
    res.status(200).json({sucess: true, msg: `Delete user ${req.params.id}`});
})

//module.exports = {deleteUser, createUser, getUsers, getUser, updateUser};

