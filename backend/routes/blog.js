const express = require('express');
const router = express.Router();
const { create, list, listAllBlogsCategoriesTags, read, remove, update } = require('../controlers/blog');
const { requireSignin, adminMiddleware} = require('../controlers/auth');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/list');
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);

module.exports = router;