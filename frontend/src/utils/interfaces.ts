export interface ICookie {
  set(name: string, value: string, options?: {}): void;
  get(name: string): string | undefined;
  delete(name: string): void;
}

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
  language: string;
}

export interface IAnswer {
  id: number;
  name: string;
  code: string;
}
