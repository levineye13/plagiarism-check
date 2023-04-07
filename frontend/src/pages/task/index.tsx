import React, { FC } from 'react';

import Title from '../../components/section-title';
import AddAnswerForm from '../../components/add-answer-form';
import styles from './index.module.scss';

const Task: FC = () => {
  return (
    <section className={styles.section}>
      <Title>Лабораторная 1</Title>
      <div className={styles.content}>
        <p className={styles.subtitle}>Сортировка пузырьком</p>
        <p className={styles.description}>
          Вам необходимо реализовать сортировку пузырьком...
        </p>
        <p className={styles.grade}>Оценено: 5</p>
        <AddAnswerForm />
      </div>
    </section>
  );
};

export default Task;
