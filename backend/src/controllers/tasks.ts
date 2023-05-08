import { NextFunction, Response } from 'express';
import { BadRequest, NotFound, Unauthorized } from '../errors';

import { Task as TaskModel } from '../models';
import { ITaskRequest } from '../utils/interfaces';

class Group {
  public static getAll = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const groups: TaskModel[] = await TaskModel.findAll();

      if (groups.length === 0) {
        res.status(200).json({
          success: true,
          subjects: [],
          text: 'Задачи пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, groups });
      }
    } catch (e) {
      next(e);
    }
  };

  public static getGroupTasks = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const groups: TaskModel[] = await TaskModel.findAll();

      if (groups.length === 0) {
        res.status(200).json({
          success: true,
          subjects: [],
          text: 'Задачи пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, groups });
      }
    } catch (e) {
      next(e);
    }
  };

  public static create = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { description, text, creatorId } = req.body;

    try {
      const newTask: TaskModel = await TaskModel.create({
        description,
        text,
        creatorId,
      });

      res.status(201).json({
        success: true,
        task: {
          id: newTask.id,
          description: newTask.description,
          text: newTask.text,
          creatorId: newTask.creatorId,
        },
      });
    } catch (e) {
      next(e);
    }
  };

  public static delete = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    if (id === undefined) {
      throw new BadRequest();
    }

    try {
      const task: TaskModel | null = await TaskModel.findByPk(id);

      if (task === null) {
        throw new NotFound();
      }

      await task.destroy();
    } catch (e) {
      next(e);
    }
  };
}

export default Group;
