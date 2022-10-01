import express from 'express';
import { getAccount, postAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccount);
router.post('/', postAccount);

export default router;