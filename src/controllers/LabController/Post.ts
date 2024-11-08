 import { Request, Response } from 'express';
import validateCreateLab from '../../validations/validateLab/createLab';
import Lab from '../../models/lab';

class PostLab {
  public static async post(req: Request, res: Response): Promise<any>{
    try{
      const {name} = req.body
      
      console.log('Antes de validar');
      
      const validate = new validateCreateLab()
      await validate.validate(req.body)
      
      const newLab = await Lab.create({
        name: String(name)
      })
      res.json(newLab)
      
    }catch(error: any){
      console.error(`Erro ao criar o laborátorio ${error}`)
      res.status(500).json({error: error.message})
    }
  }
}

export default PostLab