import express from 'express';
import userRoutes from './src/routes/userRoute'; // Importe suas rotas de usuários

const app = express();

app.use(express.json()); // Middleware para analisar JSON
app.use('/user', userRoutes); // Rotas de usuários

export default app; // Exporte a instância do app
