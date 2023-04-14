import React, { FC } from 'react';

import Title from '../../section-title';
import Back from '../../back-button';
import styles from './index.module.scss';
import Task from '../../task';
import { useLocation } from 'react-router-dom';
import DeleteButton from '../../delete-button';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { deleteTask } from '../../../store/actions';
import { TTask } from '../../../utils/types';

const Tasks: FC = () => {
  const { state } = useLocation();
  const { tasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleDelete = (task: TTask) => {
    dispatch(deleteTask(task));
  };

  return (
    <section className={styles.section}>
      <Back />
      <Title style={{ marginBottom: 20 }}>Задания</Title>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li className={styles.item} key={task.id}>
            <DeleteButton
              className={styles.delete}
              onClick={() => handleDelete(task)}
            />
            <Task
              taskId={task.id}
              subjectId={state?.subjectId || null}
              title={task.title}
              description={task.description}
            >
              {task.text}
            </Task>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
