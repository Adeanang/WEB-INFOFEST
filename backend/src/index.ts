import express from 'express';  
import cors from 'cors';

import eventRoutes from './routes/eventRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import pembicaraRoutes from './routes/pembicaraRoute.js';
import dashboardRoutes from './routes/dashboardRoute.js'; 

const app = express();

// 1. PENTING: PORT harus huruf besar semua
const port = process.env.PORT || 3000;

// 2. Middleware WAJIB ditaruh di sini (sebelum route)
app.use(cors());
app.use(express.json());

// 3. Routes
app.get('/', (req, res) => {
    res.send("hello ini adalah api untuk invofest");
});

app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/pembicara', pembicaraRoutes);
app.use('/dashboard', dashboardRoutes);

// 4. app.listen CUKUP SATU KALI SAJA di paling bawah
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});