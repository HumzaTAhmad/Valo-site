import express from 'express';
import { postAccount } from '../controllers/accounts.js';

const router = express.Router();

router.post('/', postAccount);

export default router;