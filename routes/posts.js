import express from 'express'

import {createSinglePost, deletePost, editPost, getAllPosts, getSinglePost} from "../controllers/postController.js";

const router = express.Router()

// GET ALL POSTS
router.get('/', getAllPosts)

// GET SPECIFIC POST
router.get('/:postId', getSinglePost)

// CREATE POST
router.post('/create-post', createSinglePost)

// DELETE POST
router.delete('/:postId/delete', deletePost)

// EDIT POST
router.put('/:postId/update', editPost)

export default router;


