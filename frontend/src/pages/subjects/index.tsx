import React, { FC } from 'react';

import Title from '../../components/section-title';
import SubjectList from '../../components/subjects';
import styles from './index.module.scss';

const Subjects: FC = () => {
  return (
    <section className={styles.section}>
      <Title style={{ marginBottom: 20 }}>Дисциплины</Title>
      <SubjectList />
    </section>
  );
};

export default Subjects;
