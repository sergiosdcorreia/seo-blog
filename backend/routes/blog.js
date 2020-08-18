const express = require('express');
const router = express.Router();
const {time} = require('../controlers/blog')

router.get('/', time)

module.exports = router;