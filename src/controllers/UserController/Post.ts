import { Request, Response } from 'express';
import User from '../../models/user';
import validateCreateUser from '../../validations/UserValidations/CreateUser'
import bcrypt from 'bcryptjs'

class PostUser {
  public static async post(req: Request, res: Response): Promise<any>{
    console.log("Recebendo requisição POST");
    try {
      const { firstName, lastName, email, password, permissions } = req.body;

      console.log(req.body);
      
      const validator = new validateCreateUser();
      const errors = await validator.validate(req.body)
      
      if(errors.length > 0){
        return res.status(400).json({ errors })
      }
      
      const hashedPassword = await bcrypt.hash(password, 10); 

      const newUser = await User.create({
        firstName: String(firstName),
        lastName: String(lastName),
        email: String(email),
        password_hash: hashedPassword,
        permissions: permissions || {canDeleteUsers: false}
      });
      console.log('Usuário criado com sucesso:', newUser);
      return res.status(201).json(newUser);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default PostUser;
