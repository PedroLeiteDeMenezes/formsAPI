import { Request, Response } from 'express';
import UpdateUser from '../../validations/UserValidations/update';

class Update {
  public static async put(req: Request, res: Response): Promise<any>{
    console.log(`User Id ${req.params.id}`);
    console.log(`Request Bodey ${req.body}`);
    await UpdateUser.update(req, res)
  }
}

export default Update