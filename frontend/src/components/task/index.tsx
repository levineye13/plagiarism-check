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
  readonly title: string;
  readonly children: string;
  readonly description?: string;
}

const Task: FCWithChildren<ITask> = ({
  taskId,
  subjectId,
  title,
  children,
  description = '',
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const tasks = ROUTES.tasks;

  const handleClick = (): void => {
    dispatch(setTask(title, children, description));

    if (pathname.includes(tasks)) {
      navigate(`${pathname}/${taskId}`);
    } else {
      navigate(`${pathname}/${tasks}/${taskId}`);
    }
  };

  return (
    <article className={styles.article} onClick={handleClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.area}>{children}</p>
    </article>
  );
};

export default Task;
