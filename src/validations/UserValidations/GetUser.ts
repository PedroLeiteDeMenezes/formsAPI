import User from '../../models/user';

export default class ValidateGetUser {
  async validate(userId: string): Promise<User | null> {
    try {
      const getUser = await User.findByPk(userId);
      if (!getUser) {
        return null; 
      }
      return getUser; 
    } catch (error) {
      console.log(`Error getting user: ${error}`);
      throw new Error('Internal Server Error'); 
    }
  }
}
