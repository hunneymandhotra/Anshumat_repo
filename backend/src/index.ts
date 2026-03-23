import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import candidateRoutes from './routes/candidate';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
