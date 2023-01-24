const express = require('express');
const router = express.Router();


const {index,about,contact,music} = require('../controllers/mainController')
/* GET home page. */
router
    .get('/', index)
    .get('/about', about)
    .get('/contact', contact)
    .get('/music', music)

module.exports = router;