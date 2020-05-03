export interface IUser {
  id?: string;
  eMail: string;
  firstName?: string;
  lastName?: string;
  admin?: boolean;
}

export interface ISession {
  user?: IUser;
  jwt?: string;
  expire: number;
}
