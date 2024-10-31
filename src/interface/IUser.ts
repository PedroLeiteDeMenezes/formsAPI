import { iUserPermissions } from './Ipermissions';

export interface IUser {
  id?: number;
  firstName: string; 
  lastName: string; 
  email: string; 
  password_hash: string; 
  password?: string;
  permissions: iUserPermissions
}
