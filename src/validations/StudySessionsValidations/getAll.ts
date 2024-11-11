import Study from '../../../src/models/study'
import Lab from '../../models/lab'
import User from '../../models/user'

export default class validateGetAllSessions{
  static async validate():Promise<any>{
    const getAllSessions = await Study.findAll({
      attributes: ['id', 'instructor'],
      include: [
        {model: Lab, attributes: ['name'], as: 'lab'},
        {model: User, attributes: ['firstName'], as: 'user'}
      ]
    })

    return(getAllSessions)
  }
}