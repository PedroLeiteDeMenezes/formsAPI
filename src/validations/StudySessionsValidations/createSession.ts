import Study from '../../../src/models/study'
import Lab from '../../../src/models/lab'
import User from '../../../src/models/user'

 export default class validateCreateSessions{
  async validate(data:any, user_id: number, lab_id:number): Promise<string[]>{
    const errors: string[] = []

    if(!data.instructor || typeof data.instructor !== "string"){
      errors.push("Instructor is required and must be a string")
    }

    const labExists = await Lab.findOne({where: {id: lab_id}})
    if(!labExists){
      console.log('Lab with the given ID does not exist');
    }

    const userExists = await User.findOne({where: {id: user_id}})
    if(!userExists){
      console.log('User with the given ID does not exist');
    }


    return errors
  }
 }