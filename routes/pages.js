const express = require('express');

const{
    showHome
} = require('../controllers/pages')

const router1 = express.Router();

router1
        .route('/')
        .get(showHome)
        

module.exports = router1;