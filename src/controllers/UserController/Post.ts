import { RequestHandler } from 'express';
import User from '../../models/user'; // Certifique-se de que o caminho esteja correto

class UserController {
  public static post: RequestHandler = async (req, res) => {
    console.log("Recebendo requisição POST"); // Log para verificar se a função é chamada
    try {
      const { firstName, lastName, email, password_hash } = req.body;

      // Crie um novo usuário com os dados recebidos
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password_hash,
      });

      // Responda com o novo usuário
      res.json(newUser);
    } catch (error: any) {
      console.error('Erro ao criar usuário:', error); // Log de erro
      res.status(500).json({ error: error.message });
    }
  };
}

export default UserController; // Exporte a classe UserController
