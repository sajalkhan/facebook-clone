import { Router } from 'express';
import { validateUserInfo, authUser } from '../middleware';
import { login, register, activateAccount, sendVerification } from '../controllers/user';

const router = Router();

router.post('/login', login);
router.post('/register', validateUserInfo('body'), register);
router.post('/sendVerification', authUser, sendVerification);
router.post('/activate', authUser, activateAccount);

module.exports = router;
