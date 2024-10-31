import express from 'express';
import { Sequelize } from 'sequelize';
import User from '../src/models/user'; // Importe seu modelo User
import userRoutes from '../src/routes/userRoute';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = 3334;

// Crie uma instância do Sequelize usando as variáveis de ambiente
const sequelize = new Sequelize(
  process.env.DATABASE!,
  process.env.DATABASE_USERNAME!,
  process.env.DATABASE_PASSWORD!,
  {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT), // Converte a porta para número
    dialect: 'mysql', // ou 'postgres', 'sqlite', etc.
  }
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializar o modelo User
User.initialize(sequelize);

// Sincronizar o banco de dados
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado!');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

// Rotas
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});

export default app