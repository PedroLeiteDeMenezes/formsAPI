import { Request, Response } from 'express';
import User from '../../models/user';

export default class UpdateUser{
  static async update(req:Request, res: Response): Promise<any>{
    const userId = req.params.id
    console.log(`Updated User with id ${userId}`);
    

    const user = await User.findByPk(userId)

    if(!user){
      return res.status(404).json({error: 'User not found'})
    }

    const userUpdate = await user.update(req.body)
    return res.json(userUpdate)
  }
}