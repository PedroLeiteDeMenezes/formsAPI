import { Request, Response } from 'express';
import LoginValidate from '../../validations/UserValidations/LoginUser';
import User from '../../models/user';

import jsonwentoken from 'jsonwebtoken'

class Login {
  public static async loginUser(req: Request, res: Response): Promise<any>{
    const { email, password } = req.body

    const {errors, user} = await LoginValidate.validate({email, password});
    if(errors.length > 0){
      return res.status(401).json({errors})
    }

    const token = jsonwentoken.sign({id: user.id, email: user.email}, process.env.TOKEN_SECRET ?? '' , {
      expiresIn: '1h'
    })

    return res.json({token})
  }
}

export default Login