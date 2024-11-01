import { Request, Response } from 'express';
import { IUser } from '../interface/IUser';
import { NextFunction } from 'connect';
import User from '../models/user';


export class CheckUserPermission {
  static async check(req:Request, res: Response, next: NextFunction): Promise<any>{
    const userId = req.userId

    const user : User | null = await User.findByPk(userId)

    if(!user){
      return res.status(404).json({error: 'User not found'})
    }

    console.log(`User object: ${JSON.stringify(user)}`);
    console.log(`Permissions: ${JSON.stringify(user.permissions)}`);
    
    const canDeleteUsers = user.permissions?.general?.canDeleteUsers

    if (!canDeleteUsers) {
      return res.status(403).json({ error: "You don't have permission to delete users." });
    }

    next()
  }
}