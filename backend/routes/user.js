const express = require('express');
const router = express.Router();
const { requireSignin, authMiddleware } = require('../controlers/auth');
const { read } = require('../controlers/user');

router.get('/profile', requireSignin, authMiddleware, read);

module.exports = router;