 export interface IUser {
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    password_hash: String;
    createdAt?: Date;
    updatedAt?: Date;
 }