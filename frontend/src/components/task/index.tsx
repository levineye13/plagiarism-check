import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import EditButton from '../edit-button';
import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';

const user = { role: 'teacher' };

interface ITask {
  readonly taskId: number;
  readonly subjectId: number;
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

  const handleClick = (): void => {
    navigate(`${ROUTES.subjects}/${subjectId}${ROUTES.tasks}/${taskId}`);
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
