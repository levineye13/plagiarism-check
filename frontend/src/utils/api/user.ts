import Api from './api';
import { IUser } from '../interfaces';
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
      headers: HEADERS,
      credentials: 'include',
    });

    const data = await this.checkResponce<TApiAnswer>(res);
    return data;
  };

  // public getUser = async (): Promise<IUser | never> => {
  //   const res: Response = await fetch(`${this.baseUrl}${ApiEndpoints.User}`, {
  //     method: HTTP_METHODS.get,
  //     headers: {
  //       HEADERS,
  //       authorization: `${this.options.schemaType} ${Cookie.get('access')}`,
  //     },
  //   });

  //   const data = await this.checkResponce<IUser>(res);
  //   return data;
  // };
}

const apiUser = new UserApi(API_BASE_URL, HEADERS);

export { apiUser };
