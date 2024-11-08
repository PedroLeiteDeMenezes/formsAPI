import User from '../../models/user';
import validator from 'validator'

export default class LoginValidate {
  static async validate(data:any): Promise<{errors:string []; user:any}> {
      const errors: string[] = []
      const {email, password} = data

      if(!password){
        errors.push('Password Is required')
      }

      const user = await User.findOne({where: {email: email}} )
      if(!user){
        errors.push('Invalid ')
      }
      
    return { errors, user }; 
  }
}