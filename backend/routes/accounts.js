import express from 'express';
import { postAccount } from '../controllers/account';

const router = express.Router();

router.post('/', postAccount);

export default router;