import { Router } from 'express';
import { home, register } from "../controllers/user";

const router = Router();

router.get('/user', home);
router.post('/register', register);

module.exports = router;
