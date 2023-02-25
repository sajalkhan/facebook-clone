import { Router } from 'express';
import { validateUserInfo, authUser } from '../middleware';
import { login, register, activateAccount } from '../controllers/user';

const router = Router();

router.post('/login', login);
router.post('/register', validateUserInfo('body'), register);
router.post('/activate', authUser, activateAccount);
module.exports = router;
