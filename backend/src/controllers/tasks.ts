import { NextFunction, Response } from 'express';
import { Op } from 'sequelize';

import { BadRequest, Conflict, NotFound, Unauthorized } from '../errors';
import { Subject, Task as TaskModel } from '../models';
import { ITaskRequest } from '../utils/interfaces';

class Task {
  public static getAll = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const task: TaskModel[] = await TaskModel.findAll();

      if (task.length === 0) {
        res.status(200).json({
          success: true,
          task: [],
          text: 'Задачи пока что отсутствуют',
        });
      } else {
        res.status(200).json({ success: true, task });
      }
    } catch (e) {
      next(e);
    }
  };

  public static getMyTasks = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { user } = req;

    try {
      if (!user || !user.id) {
        throw new Unauthorized();
      }

      const tasks: TaskModel[] | null = await TaskModel.findAll({
        where: { creatorId: user.id },
      });

      if (!tasks) {
        throw new NotFound();
      }

      res.status(200).json(tasks);
    } catch (e) {
      next(e);
    }
  };

  public static getSubjectTasks = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    // const { subjectId } = req.body;
    // try {
    //   const task: TaskModel[] = await TaskModel.findAll({
    //     where: { subjectId: subjectId },
    //   });
    //   if (task.length === 0) {
    //     res.status(200).json({
    //       success: true,
    //       task: [],
    //       text: 'Задачи пока что отсутствуют',
    //     });
    //   } else {
    //     res.status(200).json({ success: true, task });
    //   }
    // } catch (e) {
    //   next(e);
    // }
  };

  public static getById = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.body;

    try {
      const task: TaskModel | null = await TaskModel.findByPk(id);

      if (!task) {
        throw new NotFound();
      }

      res.status(200).json(task);
    } catch (e) {
      next(e);
    }
  };

  public static create = async (
    req: ITaskRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { description, text, language, courses } = req.body;
    const { user } = req;

    try {
      if (user === undefined || user.id === undefined) {
        throw new Unauthorized();
      }

      const isTask: TaskModel | null = await TaskModel.findOne({
        where: { description },
      });

      if (isTask) {
        throw new Conflict();
      }

      if (!courses || courses.length <= 0) {
        throw new BadRequest();
      }

      const newTask: TaskModel = await TaskModel.create({
        description,
        text,
        language,
        creatorId: user.id,
      });

      const courseInstances: Subject[] = await Subject.findAll({
        where: {
          name: {
            [Op.in]: [...courses],
          },
        },
      });

      courseInstances.forEach(async (couseInstance) => {
        await couseInstance.addTask(newTask);
      });

      res.status(201).json({
        id: newTask.id,
        description: newTask.description,
        language: newTask.language,
        text: newTask.text,
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

      res.status(200).json({ success: true });
    } catch (e) {
      next(e);
    }
  };
}

export default Task;
