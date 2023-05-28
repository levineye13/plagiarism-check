import React, { FC, useEffect } from 'react';

import Title from '../../section-title';
import Back from '../../back-button';
import styles from './index.module.scss';
import Task from '../../task';
import { useLocation } from 'react-router-dom';
import DeleteButton from '../../delete-button';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { deleteTask, getAllTaskOwner } from '../../../store/actions';
import { ITask } from '../../../utils/interfaces';

const Tasks: FC = () => {
  const { state } = useLocation();
  const { allOwner } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const handleDelete = (task: ITask) => {
    dispatch(deleteTask(task));
  };

  useEffect(() => {
    dispatch(getAllTaskOwner());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Back />
      <Title style={{ marginBottom: 20 }}>Задания</Title>
      <ul className={styles.list}>
        {allOwner.map((task) => (
          <li className={styles.item} key={task.id}>
            <DeleteButton
              className={styles.delete}
              onClick={() => handleDelete(task)}
            />
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
    </section>
  );
};

export default Tasks;
