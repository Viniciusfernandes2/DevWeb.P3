import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db';
import reservationRoutes from './routes/reservations';

dotenv.config();
connectDB();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));