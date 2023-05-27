import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Task from '../task';
import styles from './index.module.scss';
import { ITask } from '../../utils/interfaces';

interface ITasks {
  readonly tasks: Array<ITask>;
}

const Tasks: FC<ITasks> = ({ tasks }) => {
  const { state } = useLocation();

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <Task
            taskId={task.id}
            subjectId={state?.subjectId || null}
            description={task.description}
            language={task.language}
          >
            {task.text}
          </Task>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
