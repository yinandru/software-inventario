import express from 'express';
import { getAdminPage, getProfilePage } from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/admin', getAdminPage);
router.get('/profile', getProfilePage);

export default router;