import { Request, Response } from 'express';
import Lab from '../../models/lab'

export default  class DeleteLab {
  static async delete(req: Request, res: Response): Promise<any>{
    const errors : string[] = []
    const labId = req.params.id

    console.log(`Deleted lab with id ${labId}`);

    const lab = await Lab.findByPk(labId)
    if(!lab){
      return res.status(404).json({error: 'Lab not found'})
    }
    
    await lab.destroy()
    return res.json({message: `Lab with id ${labId} deleted successfully`})
  }
}