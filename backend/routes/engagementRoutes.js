// routes/engagementRoutes.js

import express from 'express';
import { logEngagement } from '../controllers/engagementController.js';

const router = express.Router();

// POST /api/engagement
router.post('/', logEngagement);

export default router;
