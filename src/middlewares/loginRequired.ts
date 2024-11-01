import { Request, Response, NextFunction  } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken';

interface TokenPayload extends JwtPayload{
  id: number;
  email: string;
}

export default class LoginRequired {
  static async required(req:Request, res: Response, next:NextFunction): Promise<any> {
  const { authorization } = req.headers
  console.log(req.headers);
  

  if(!authorization){
    return res.status(401).json({
      erors: ['Login Required']
    })
  }

  const [, token] = authorization.split(' ');
  const tokenSecret = process.env.TOKEN_SECRET
  if (!tokenSecret) {
    return res.status(500).json({
      errors: ['Internal server error: TOKEN_SECRET is not defined.']
    });
  }

  try{
    const datas = jwt.verify(token, tokenSecret) as TokenPayload;
    req.userId = datas.id
    req.userEmail = datas.email
    console.log(req.userId, req.userEmail);
    

    console.log(`User id defined in login required ${req.userId}`);
    
    return next()
  }catch{
    return res.status(401).json({
      errors: ['Expired token or invalid']
    })
  }
  }
}
