import { Sequelize } from 'sequelize'; 
import databaseConfig from '../config/database'
import User from '../models/user'
import Lab from '../models/lab';

const connection = new Sequelize(databaseConfig)

const models: any[] = [User, Lab]

models.forEach((model) => {
  if(model.associate){
    model.associate(models)
  }
})

export {connection, models}