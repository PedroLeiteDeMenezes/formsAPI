import { Request, Response } from 'express';
import DeleteSession from '../../validations/StudySessionsValidations/deleteSession';

class DeleteSessionController {
  public static async DeleteSession(req: Request, res:Response):Promise<any>{
    try{
      await DeleteSession.delete(req, res)
    }catch(error){
      console.log(`Error deleted Session ${error}`);
      return res.status(500).json({error: 'Internal server Error'})
    }
  }
}

export default DeleteSessionController