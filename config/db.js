
const mongoose = require('mongoose');
const uri = 'mongodb+srv://mriojas:Fischl1432@cluster0.m8poh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectDB = async () =>{
    const conn = await mongoose.connect(uri, {
        useNewUrlParser: true,
        
        useUnifiedTopology: true,
        
    })
    console.log(`Mogodb connected: ${conn.connection.host}`);
}

module.exports = connectDB;