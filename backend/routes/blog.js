const express = require('express');
const router = express.Router();
const { create, list, listAllBlogsCategoriesTags, read, remove, update, photo } = require('../controlers/blog');
const { requireSignin, adminMiddleware} = require('../controlers/auth');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/list');
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);
router.get('/blog/photo/:slug', photo);

module.exports = router;