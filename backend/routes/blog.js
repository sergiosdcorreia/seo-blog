const express = require('express');
const router = express.Router();
const { create } = require('../controlers/blog');
const { requireSignin, adminMiddleware} = require('../controlers/auth');

router.post('/blog', requireSignin, adminMiddleware, create)

module.exports = router;