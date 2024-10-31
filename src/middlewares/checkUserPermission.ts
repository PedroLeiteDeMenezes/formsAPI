import { Request, Response } from 'express';
import { IUser } from '../interface/IUser';
import { NextFunction } from 'connect';
import User from '../models/user';


export class CheckUserPermission {
  static async check(req:Request, res: Response, next: NextFunction): Promise<any>{
    const userId = req.userId

    const user: IUser | null = await User.findByPk(userId);

    if(!user){
      return res.status(404).json({error: 'User not found'})
    }

    if (!user.permissions.canDeleteUsers) {
      return res.status(403).json({ error: "You don't have permission to delete users." });
    }

    next()
  }
}