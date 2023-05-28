import { TApiAnswer } from './types';
import { IAnswer } from '../interfaces';
import Api from './api';

import { HTTP_METHODS, HEADERS, API_BASE_URL } from './constants';

class AnswerApi extends Api {
  public constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    super(baseUrl, headers);
  }

  public create = async (
    name: string,
    code: string,
    taskId: number
  ): Promise<IAnswer | never> => {
    const res: Response = await fetch(`${this.baseUrl}/answers`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ name, code, taskId }),
    });

    const answer = await this.checkResponce<IAnswer>(res);
    return answer;
  };

  public getAll = async (taskId: number): Promise<IAnswer[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/answers`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ taskId }),
    });

    const tasks = await this.checkResponce<IAnswer[]>(res);
    return tasks;
  };
}

const apiAnswer = new AnswerApi(API_BASE_URL, HEADERS);

export { apiAnswer };
