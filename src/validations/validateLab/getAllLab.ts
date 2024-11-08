import { Request, Response } from 'express';
import Lab from "../../../src/models/lab";

export default class GetAllLab{
  static async getAll(req: any, res:any): Promise<any>{
    const getUserAll = await Lab.findAll({
      attributes: ['id', 'name',]
    })
    return res.json(getUserAll)
  }
}