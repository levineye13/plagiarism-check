export interface IUser {
  name: string;
  email: string;
  group: string;
}

export interface IGroup {
  id: number;
  name: string;
}

export interface ISubject {
  id: number;
  name: string;
}

export interface ITask {
  id: number;
  description: string;
  text: string;
}
