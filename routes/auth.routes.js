import express from 'express';
import { getLoginPage, postLogin, logout, getRegisterPage, registerUser, getAccountRecovery, accountRecovery } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getLoginPage);
router.get('/auth/login', getLoginPage);
router.post('/auth/login', postLogin);
router.get('/auth/logout', logout);
router.get('/auth/register', getRegisterPage);
router.post('/auth/register', registerUser);
router.get('/auth/account_recovery', getAccountRecovery);
router.post('/auth/account_recovery', accountRecovery);

export default router;