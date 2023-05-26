import { Request, Response, NextFunction } from 'express';

import { TRole } from './types';

export interface IUser {
  readonly id: number;
  readonly role: TRole;
  readonly email: string;
  readonly name: string;
  readonly password: string;
  readonly group: string;
}

export interface IGroup {
  readonly id: number;
  readonly name: string;
  readonly creatorId: number;
}

export interface ISubject {
  readonly id: number;
  readonly name: string;
  readonly creatorId: number;
}

export interface ITask {
  readonly id: number;
  readonly description: string;
  readonly text: string;
  readonly language: string;
  readonly creatorId: number;
}

export interface ILoginData {
  readonly email: string;
  readonly password: string;
}

export interface IRegisterData extends ILoginData {
  readonly name: string;
}

export interface IRequest extends Request {
  readonly body: {
    readonly email: string;
    readonly name: string;
    readonly password: string;
    readonly group: string;
    readonly id?: number;
    readonly role?: TRole;
  };
  user?: {
    id?: number;
    role?: TRole;
  };
}

export interface IGroupRequest extends Request {
  readonly body: {
    readonly id: number;
    readonly name: string;
  };
  user?: {
    id?: number;
    role?: TRole;
  };
}

export interface ISubjectRequest extends Request {
  readonly body: {
    readonly id: number;
    readonly name: string;
    readonly groups?: Array<string>;
  };
  user?: {
    id?: number;
    role?: TRole;
  };
}

export interface ITaskRequest extends Request {
  readonly body: {
    readonly id: number;
    readonly description: string;
    readonly text: string;
    readonly language: string;
    readonly courses?: string[];
  };
  user?: {
    id?: number;
    role?: TRole;
  };
}

export type MiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface IController {
  readonly req: IRequest;
  readonly res: Response;
  readonly next: NextFunction;
}

export interface IAuthAnswer {
  readonly success: boolean;
  readonly user: {
    readonly email: string;
    readonly name: string;
  };
  readonly accessToken: string;
  readonly refreshToken: string;
}
