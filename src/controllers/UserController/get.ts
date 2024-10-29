import { Request, Response } from 'express';
import User from '../../models/user';
import GetuserID from '../../validations/UserValidations/GetUser'

class GetId {
  public static async get(req: Request, res:Response){
    try{
      const userId = req.params.id
      console.log(`User ID: ${userId}`);
      
      const getUser = new GetuserID();
      const user = await getUser.validate(userId)
      
      if(!user){
        return res.status(404).json({ message: 'User not found'})
      }
      
      return res.json(getUser)
    }catch(error){
      console.log("Error a get user id", error);
      return res.status(500).json({error: 'Internal server error'})
    }
  }
}

export default GetId;