import React, { FC } from 'react';

import { FCWithChildren } from '../../utils/types';
import DeleteButton from '../delete-button';
import EditButton from '../edit-button';
import styles from './index.module.scss';

const user = { role: 'teacher' };

interface ITask {
  readonly title: string;
  readonly children: string;
  readonly description?: string;
}

const Task: FCWithChildren<ITask> = ({ title, children, description = '' }) => {
  return (
    <article className={styles.article}>
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
