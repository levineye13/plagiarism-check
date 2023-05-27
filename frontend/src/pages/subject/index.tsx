import React, { FC } from 'react';

import Title from '../../components/section-title';
import GroupList from '../../components/group-list';
import Tasks from '../../components/tasks';
import styles from './index.module.scss';
import { ROUTES } from '../../utils/constants';
import { useAppSelector } from '../../store/hooks';
import { useLocation } from 'react-router-dom';

const Subject: FC = () => {
  const { subjects } = useAppSelector((state) => state.auth.user.group);
  const { state } = useLocation();

  const subject = subjects.find((subject) => subject.id === state.subjectId);
  const tasks = subject?.tasks || [];

  return (
    <section className={styles.section}>
      {subject && (
        <>
          <Title>{subject.name}</Title>
          <div className={styles.wrapper}>
            <p className={styles.paragraph}>Задания</p>
            <Tasks tasks={tasks} />
          </div>
        </>
      )}
    </section>
  );
};

export default Subject;
