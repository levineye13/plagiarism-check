import React, { FC } from 'react';

import Title from '../../section-title';
import Back from '../../back-button';
import TaskList from '../../tasks';
import styles from './index.module.scss';

const Tasks: FC = () => {
  return (
    <section className={styles.section}>
      <Back />
      <Title style={{ marginBottom: 20 }}>Задания</Title>
      <TaskList />
    </section>
  );
};

export default Tasks;
