import React, { FC } from 'react';

import Title from '../../components/section-title';
import GroupList from '../../components/group-list';
import AddGroupForm from '../../components/add-group-form';
import Tasks from '../../components/tasks';
import AddTaskForm from '../../components/add-task-form';
import styles from './index.module.scss';

const subject = {
  title: 'Машинное обучение',
  groups: ['AAA-21-20', 'BBB-22-21', 'CCC-23-22'],
};

const user = { role: 'teacher' };

const Subject: FC = () => {
  return (
    <section className={styles.section}>
      <Title>{subject.title}</Title>
      <p className={styles.paragraph}>Группы</p>
      <GroupList />
      {user.role !== 'student' && (
        <>
          <p className={styles.paragraph}>Добавление группы</p>
          <AddGroupForm />
        </>
      )}
      <p className={styles.paragraph}>Задания</p>
      <Tasks />
      {user.role !== 'student' && (
        <>
          <p className={styles.paragraph}>Добавление задания</p>
          <AddTaskForm />
        </>
      )}
    </section>
  );
};

export default Subject;
