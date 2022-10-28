import express from 'express';
import { getAccount, postAccount, updateAccount, deleteAccount } from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccount);
router.post('/', postAccount);
router.patch('/:id', updateAccount);
router.delete('/:id', deleteAccount);

export default router;