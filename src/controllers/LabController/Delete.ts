import { Request, Response } from 'express';
import DeleteLab from '../../validations/validateLab/deleteLab';

class DeleteLabController {
  public static async deleteLab(req: Request, res:Response): Promise<any>{
    try{
      await DeleteLab.delete(req, res)
    }catch(error){
      console.log(`Error deleted User ${error}`);
      return res.status(500).json({error: 'Internal server Error'})
    }
  }
}

export default DeleteLabController