import { IGroup } from '../interfaces';
import Api from './api';

import { HTTP_METHODS, HEADERS, API_BASE_URL } from './constants';

class GroupApi extends Api {
  public constructor(baseUrl: string, headers: { [key: string]: string } = {}) {
    super(baseUrl, headers);
  }

  public create = async (
    name: string
  ): Promise<(IGroup & { id: number }) | never> => {
    const res: Response = await fetch(`${this.baseUrl}/groups`, {
      method: HTTP_METHODS.post,
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({ name }),
    });

    const group = await this.checkResponce<IGroup>(res);
    return group;
  };

  public getAll = async (): Promise<IGroup[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/groups`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const groups = await this.checkResponce<IGroup[]>(res);
    return groups;
  };

  public getAllOwner = async (): Promise<IGroup[] | never> => {
    const res: Response = await fetch(`${this.baseUrl}/groups/owner`, {
      method: HTTP_METHODS.get,
      headers: this.headers,
      credentials: 'include',
    });

    const groups = await this.checkResponce<IGroup[]>(res);
    return groups;
  };
}

const apiGroup = new GroupApi(API_BASE_URL, HEADERS);

export { apiGroup };
