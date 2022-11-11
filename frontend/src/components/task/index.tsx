import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import EditButton from '../edit-button';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const user = { role: 'teacher' };

interface ITask {
  readonly id: number;
  readonly title: string;
  readonly children: string;
  readonly description?: string;
}

const Task: FCWithChildren<ITask> = ({
  id,
  title,
  children,
  description = '',
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(`${pathname}${ROUTES.tasks}/${id}`);
  };

  return (
    <article className={styles.article} onClick={handleClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.area}>{children}</p>
      {user.role !== 'student' && (
        <div className={styles.edit}>
          <DeleteButton />
          <EditButton />
        </div>
      )}
    </article>
  );
};

export default Task;
