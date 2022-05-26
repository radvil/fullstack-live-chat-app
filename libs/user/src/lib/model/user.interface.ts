export interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  createdTimestamp: string;
  updatedTimestamp?:string;
  passwordUpdatedTimestamp?: string;
}
