import GetAllLab from '../../validations/validateLab/getAllLab';

class GetAll {
  public static async getAll(req: any, res:any): Promise<any>{
   try{
    await GetAllLab.getAll(req, res)
   }catch(error: any){
    console.log('Error get all labs', error);
    return res.status(500).json({error: 'Internal Sever error'})
   } 
  }
}

export default GetAll