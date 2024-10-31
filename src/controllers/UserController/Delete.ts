import { Request, Response } from 'express';
import DeleteUser from '../../validations/UserValidations/deleteUser';

class DeleteUserController {
  public static async deleteUser(req:Request, res: Response): Promise<any>{
    try{
      await DeleteUser.delete(req, res)
    }catch(error){
      console.log(`Error deleted user ${error}`)
      return res.status(500).json({error: 'Internal Server Error'})
    }
  }
}

export default DeleteUserController;