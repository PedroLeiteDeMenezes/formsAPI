import { Request, Response } from 'express';
import User from '../../models/user';
import validateCreateUser from '../../validations/UserValidations/CreateUser'

class PostUser {
  public static async post(req: Request, res: Response){
    console.log("Recebendo requisição POST");
    try {
      const { firstName, lastName, email, password_hash } = req.body;

      console.log(req.body);
      
      const validator = new validateCreateUser();
      const errors = await validator.validate(req.body)
      
      if(errors.length > 0){
        res.status(400).json({ errors })
      }
      
      const newUser = await User.create({
        firstName: String(firstName),
        lastName: String(lastName),
        email: String(email),
        password_hash: String(password_hash),
      });
      console.log('Usuário criado com sucesso:', newUser);
      res.json(newUser);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default PostUser;
