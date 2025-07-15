import express from 'express';
import cors from 'cors';
import { requestLogger } from './middleware/logger.js';

import engagementRoutes from './routes/engagementRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api/engagement', engagementRoutes);
app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
