import express from 'express';

import {getPosts, getPost, createPost, updatePost, deletePost, likePost, dislikePost, commentPost } from '../controllers/posts.js'
import auth from '../middleware/auth.js';

const router = express.Router();

//localhost:5000/posts
router.get('/:id', getPost);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/dislikePost', auth, dislikePost);
router.post('/:id/commentPost', commentPost);

export default router;
