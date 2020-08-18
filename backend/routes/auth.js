const express = require('express');
const router = express.Router();
const {signup} = require('../controlers/auth')

router.post('/signup', signup)

module.exports = router;