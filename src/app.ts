import express from 'express';
import { Model, Sequelize } from 'sequelize';
import User from '../src/models/user'; 
import Lab from '../src/models/lab';
import Study from '../src/models/study'
import {Models} from '../src/types/models'
import dotenv from 'dotenv';

import userRoutes from '../src/routes/userRoute';
import labRoutes from '../src/routes/labRoutes'
import sessionRoutes from '../src/routes/sessionRoutes'

dotenv.config();

const app = express();
const PORT = 3334;


const sequelize = new Sequelize(
  process.env.DATABASE!,
  process.env.DATABASE_USERNAME!,
  process.env.DATABASE_PASSWORD!,
  {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT), 
    dialect: 'mysql', 
  }
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


User.initialize(sequelize);
Lab.initialize(sequelize);
Study.initialize(sequelize);

const models: Models = {
  User: User,
  Lab: Lab,
  Study: Study
}

User.associate(models);
Lab.associate(models);
Study.associate(models);


sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado!');
}).catch(err => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});


app.use('/users', userRoutes);
app.use('/lab', labRoutes);
app.use('/session', sessionRoutes)

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});

export default app