import React, { FC } from 'react';

import Title from '../../components/section-title';
import GroupList from '../../components/group-list';
import Tasks from '../../components/tasks';
import styles from './index.module.scss';
import { ROUTES } from '../../utils/constants';

const subject = {
  title: 'Алгоритмы',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
  ],
};

const Subject: FC = () => {
  return (
    <section className={styles.section}>
      <Title>{subject.title}</Title>
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>Группы</p>
        <GroupList path={ROUTES.groups} />
        <p className={styles.paragraph}>Задания</p>
        <Tasks />
      </div>
    </section>
  );
};

export default Subject;
