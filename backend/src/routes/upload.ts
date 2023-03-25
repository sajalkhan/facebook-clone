import { Router } from 'express';
import { validateFiles } from '../middleware';
import { uploadImages } from '../controllers/upload';

const router = Router();
router.post('/uploadImages', validateFiles, uploadImages);

module.exports = router;
