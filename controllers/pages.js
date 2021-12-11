const path = require('path');
exports.showHome = ('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, '../interface/home.html'))
});

exports.showLogin = ('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, '../interface/login.js'));
    
})
