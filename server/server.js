

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.config.js';
import inventoryRoutes from './routes/inventory.routes.js';
import errorHandler from './middleware/error.middleware.js';
import helmet from 'helmet';
import morgan from 'morgan';
import transferRoutes from './routes/transfer.routes.js';
import authRouts from './routes/auth.routes.js';

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/auth', authRouts);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));