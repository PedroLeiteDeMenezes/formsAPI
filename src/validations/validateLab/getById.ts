import { Request, Response } from 'express';
import Lab from '../../models/lab'

export default class ValidateGetLab {
  static async validate(labId: number): Promise<any>{
    const getLab = await Lab.findByPk(labId);
    if (!getLab) {
      throw new Error('Lab not found');
    }
    return getLab;
  }
}