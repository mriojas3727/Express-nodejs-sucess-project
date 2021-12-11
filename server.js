const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger')
const router = require('./routes/users')

const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
dotenv.config({path: "./config/config.env"});
const PORT = dotenv.PORT || 5000;
const app = express()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());



connectDB();
app.use(logger);
app.use(router)

app.listen(PORT, function() {
    console.log(`Server is running at http://localhost:${PORT}`);
})
