import { Router } from 'express';
import { validateUserInfo, authUser } from '../middleware';
import { login, register, activateAccount, sendVerification, findUser } from '../controllers/user';

const router = Router();

router.post('/login', login);
router.post('/register', validateUserInfo('body'), register);
router.post('/sendVerification', authUser, sendVerification);
router.post('/activate', authUser, activateAccount);
router.post('/findUser', findUser);

module.exports = router;
