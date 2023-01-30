import { Router } from 'express';
import { home, register } from "../controllers/user";
import { validateUserInfo } from '../helpers/userValidation';

const router = Router();
router.use(validateUserInfo('body'));

router.get('/user', home);
router.post('/register', register);

module.exports = router;
