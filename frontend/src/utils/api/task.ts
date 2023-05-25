import { TApiAnswer } from './types';
import { ITask } from '../interfaces';
import Api from './api';

import { HTTP_METHODS, HEADERS, API_BASE_URL } from './constants';

class TaskApi extends Api {
  public constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    super(baseUrl, headers);
  }

  public create = async (
    description: string,
    text: string,
    language: string,
    courses: string[]
  ): Promise<ITask | never> => {
    const res: Response = await fetch(`${this.baseUrl}/tasks`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ description, text, language, courses }),
    });

    const tasks = await this.checkResponce<ITask>(res);
    return tasks;
  };

  public delete = async ({
    id,
  }: {
    id: number;
  }): Promise<TApiAnswer | never> => {
    const res: Response = await fetch(`${this.baseUrl}/tasks`, {
      method: HTTP_METHODS.delete,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ id }),
    });

    const apiAnswer = await this.checkResponce<TApiAnswer>(res);
    return apiAnswer;
  };

  public getAll = async (): Promise<ITask[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/tasks`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const tasks = await this.checkResponce<ITask[]>(res);
    return tasks;
  };

  public getAllOwner = async (): Promise<ITask[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/tasks/owner`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const tasks = await this.checkResponce<ITask[]>(res);
    return tasks;
  };
}

const apiTask = new TaskApi(API_BASE_URL, HEADERS);

export { apiTask };
