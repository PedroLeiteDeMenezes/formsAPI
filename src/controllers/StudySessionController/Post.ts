import { Request, Response } from 'express';
import validateCreateSessions from '../../validations/StudySessionsValidations/createSession';
import Study from '../../models/study';

class PostStudy{
  public static async post(req: Request, res:Response): Promise<any>{
    const userId = req.userId;
    if (userId === undefined || isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid userId' });
    }
    
    const labId: number = parseInt(req.params.labId)
    const {instructor} = req.body

    if(isNaN(labId)){
      return res.status(400).json({error: 'Invalid labId'})
    }

    const validate = new validateCreateSessions()
    await validate.validate(req.body, userId, labId)
    
    try{
      const newSession = await Study.create({
        instructor: String(instructor),
        user_id: userId,
        lab_id: labId
      })
      res.json(newSession)

    }catch(error:any){
      console.error(`Erro ao criar a Sessão ${error}`)
      res.status(500).json({error: error.message})
    }
  }
}

export default PostStudy