import { Router } from 'express';
import { authUser } from '../middleware';
import { createPost } from '../controllers/post';

const router = Router();
router.post('/createPost', authUser, createPost);

module.exports = router;
