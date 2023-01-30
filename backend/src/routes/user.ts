import { Router } from 'express';
import { validateUserInfo } from '../middleware';
import { home, register } from '../controllers/user';

const router = Router();

router.get('/user', home);
router.post('/register', validateUserInfo('body'), register);

module.exports = router;
