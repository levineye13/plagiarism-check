import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { setTask } from '../../store/actions/task';

interface ITask {
  readonly taskId: number;
  readonly subjectId: number | null;
  readonly description: string;
  readonly children: string;
  readonly language: string;
}

const Task: FCWithChildren<ITask> = ({
  taskId,
  subjectId,
  children,
  description,
  language,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const tasks = ROUTES.tasks;

  const handleClick = (): void => {
    dispatch(setTask(taskId, description, children, language));

    if (pathname.includes(tasks)) {
      navigate(`${pathname}/${taskId}`);
    } else {
      navigate(`${pathname}/${tasks}/${taskId}`);
    }
  };

  return (
    <article className={styles.article} onClick={handleClick}>
      <p className={styles.description}>{description}</p>
      <p className={styles.area}>{children}</p>
    </article>
  );
};

export default Task;
