import { Router } from 'express';
import { validateUserInfo, authUser } from '../middleware';
import {
  login,
  register,
  findUser,
  changePassword,
  activateAccount,
  sendVerification,
  validateResetCode,
  sendResetPasswordCode
} from '../controllers/user';

const router = Router();

router.post('/login', login);
router.post('/register', validateUserInfo('body'), register);
router.post('/sendVerification', authUser, sendVerification);
router.post('/activate', authUser, activateAccount);
router.post('/findUser', findUser);
router.post('/sendResetPasswordCode', sendResetPasswordCode);
router.post('/validateResetCode', validateResetCode);
router.post('/changePassword', changePassword);

module.exports = router;
