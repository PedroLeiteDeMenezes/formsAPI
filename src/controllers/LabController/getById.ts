import { Request, Response } from 'express';
import Lab from '../../models/lab'
import ValidateGetLab from '../../validations/validateLab/getById'

class GetId{
  public static async get(req:Request, res: Response ): Promise<any>{
    try{
      const labId: number = parseInt(req.params.id, 10);
      console.log(`Lab Id: ${labId}`);

      const getLab = await ValidateGetLab.validate(labId)

      return res.json(getLab)
      
    }catch(error){
      console.log(`Error a get lab id ${error}`);
      return res.status(500).json({error: 'Internal server error'})
    }
  }
}

export default GetId