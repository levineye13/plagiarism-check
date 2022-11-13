import React, { FC } from 'react';

import GroupList from '../../components/group-list';
import Title from '../../components/section-title';
import styles from './index.module.scss';

const Groups: FC = () => {
  return (
    <section className={styles.section}>
      <Title style={{ marginBottom: 30 }}>Лабораторная 1</Title>
      <GroupList />
    </section>
  );
};

export default Groups;
