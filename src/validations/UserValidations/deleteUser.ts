import { Request, Response } from 'express';
import User from '../../models/user';

export default class DeleteUser{
  static async delete(req: Request, res: Response): Promise<any>{
    const errors : string[] = []
    const userId = req.params.id
    console.log(`Deleted User with ID ${userId}`);

    const user = await User.findByPk(userId)
    if(!user){
      return res.status(404).json({error: 'User not Found'})
    }

    await user.destroy()
    return res.json({message: `User with id ${userId} deleted successfully`})
  }
}
