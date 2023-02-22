import { IUser } from '../interfaces';

export interface IApiUser extends IUser {
  password: string;
}

export type TApiAnswer = {
  success: boolean;
};
