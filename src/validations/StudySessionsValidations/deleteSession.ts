import { Request, Response } from 'express';
import Study from '../../models/study';

export default class DeleteSession{
  static async delete(req: Request, res:Response):Promise<any>{
    const errors : string[] = []
    const sessionId = req.params.id

    console.log(`Deleted session with id ${sessionId}`);
  
    const session = await Study.findByPk(sessionId)
    if(!session){
      return res.status(404).json({error: 'Session not found'})
    }

    await session.destroy()
    return res.json({message: `Session with id ${sessionId} deleted sueccessfully`})
  }
}