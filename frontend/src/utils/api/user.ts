import Api from './api';
import { IGroup, IUser } from '../interfaces';
import { IApiUser, TApiAnswer } from './types';
import { HTTP_METHODS, HEADERS, API_ROUTES, API_BASE_URL } from './constants';

class UserApi extends Api {
  public constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    super(baseUrl, headers);
  }

  public register = async (user: IApiUser): Promise<IUser | never> => {
    const res: Response = await fetch(`${this.baseUrl}/${API_ROUTES.signup}`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      body: JSON.stringify(user),
      credentials: 'include',
    });

    const newUser = await this.checkResponce<IUser>(res);
    return newUser;
  };

  public login = async (user: {
    email: string;
    password: string;
  }): Promise<IUser | never> => {
    const res: Response = await fetch(`${this.baseUrl}/${API_ROUTES.signin}`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      body: JSON.stringify(user),
      credentials: 'include',
    });

    const currentUser = await this.checkResponce<IUser>(res);
    return currentUser;
  };

  public logout = async (): Promise<TApiAnswer | never> => {
    const res: Response = await fetch(`${this.baseUrl}/${API_ROUTES.signout}`, {
      method: HTTP_METHODS.head,
      headers: this.headers,
      credentials: 'include',
    });

    const data = await this.checkResponce<TApiAnswer>(res);
    return data;
  };

  public getUser = async (): Promise<
    | {
        id: number;
        email: string;
        name: string;
        group: {
          id: number;
          name: string;
          subjects: { id: number; name: string };
        };
      }
    | never
  > => {
    const res: Response = await fetch(`${this.baseUrl}/${API_ROUTES.user}`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const data = await this.checkResponce<{
      id: number;
      email: string;
      name: string;
      group: {
        id: number;
        name: string;
        subjects: { id: number; name: string };
      };
    }>(res);
    return data;
  };
}

const apiUser = new UserApi(API_BASE_URL, HEADERS);

export { apiUser };
