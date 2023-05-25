import { ISubject } from '../interfaces';
import Api from './api';

import { HTTP_METHODS, HEADERS, API_BASE_URL } from './constants';
import { TApiAnswer } from './types';

class SubjectApi extends Api {
  public constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    super(baseUrl, headers);
  }

  public create = async (
    name: string,
    groups: string[]
  ): Promise<ISubject | never> => {
    const res: Response = await fetch(`${this.baseUrl}/subjects`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ name, groups }),
    });

    const subject = await this.checkResponce<ISubject>(res);
    return subject;
  };

  public delete = async ({
    id,
  }: {
    id: number;
  }): Promise<TApiAnswer | never> => {
    const res: Response = await fetch(`${this.baseUrl}/subjects`, {
      method: HTTP_METHODS.delete,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ id }),
    });

    const apiAnswer = await this.checkResponce<TApiAnswer>(res);
    return apiAnswer;
  };

  public getAll = async (): Promise<ISubject[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/subjects`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const subjects = await this.checkResponce<ISubject[]>(res);
    return subjects;
  };

  public getAllOwner = async (): Promise<ISubject[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/subjects/owner`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const subjects = await this.checkResponce<ISubject[]>(res);
    return subjects;
  };
}

const apiSubject = new SubjectApi(API_BASE_URL, HEADERS);

export { apiSubject };
