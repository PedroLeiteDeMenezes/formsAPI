import User from '../../models/user';
import validator from 'validator'

export default class validateCreateUser {
  async validate(data: any): Promise<string[]> {
    const errors: string[] = [];

    if(!data.firstName || typeof data.firstName !== 'string'){
      errors.push('First name is required and must be a string')
    }

    if(!data.lastName || typeof data.lastName !== 'string'){
      errors.push('Last Name is required and must be a string.')
    }

    if(!data.email || typeof data.email !== 'string' || !validator.isEmail(data.email)){
      errors.push('A valid email is required')
    }

    if(!data.password || data.password.length < 6){
      errors.push('Password is required and must be at least 6 characters')
    }

    const userExists = await User.findOne({ where: { email: data.email } });
    if (userExists) {
      errors.push('A user with this email already exists.');
    }
    return errors
  }

}