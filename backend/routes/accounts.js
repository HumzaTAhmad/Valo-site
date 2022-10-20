import express from 'express';
import { getAccount, postAccount, updateAccount} from '../controllers/accounts.js';

const router = express.Router();

router.get('/', getAccount);
router.post('/', postAccount);
router.patch('/:id', updateAccount);

export default router;