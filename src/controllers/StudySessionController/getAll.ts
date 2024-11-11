import { Request, Response } from 'express';
import validateGetAllSessions from '../../validations/StudySessionsValidations/getAll';

class GetAll {
  public static async getAll(req: Request, res: Response): Promise<any>{
    try{
      const sessions = await validateGetAllSessions.validate()
      return res.json(sessions)
    }catch(error){
      console.log('Error get all sessions', error);
      return res.status(500).json({error: 'Internal Sever error'})
    }
  }
}

export default GetAll