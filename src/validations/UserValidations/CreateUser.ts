import User from '../../models/user';

export default class validateCreateUser {
  async validate(data: any): Promise<string[]> {
    const errors: string[] = [];
    const validator = require('validator')

    if(!data.firstName || typeof data.firstName !== 'string'){
      errors.push('First name is required and must be a string')
    }

    if(!data.lastName || typeof data.lastName !== 'string'){
      errors.push('Last Name is required and must be a string.')
    }

    if(!data.email || typeof data.email !== 'string' || validator.isEmail(data.email)){
      errors.push('A valid email is required')
    }

    if(!data.password_hash || data.password_hash.length < 6){
      errors.push('Password is required and must be at least 6 characters')
    }

    const userExit = await User.findOne({where: {email: data.email}})
    
    if(userExit){
      errors.push('A user with email already exist')
    }
    return errors
  }
}