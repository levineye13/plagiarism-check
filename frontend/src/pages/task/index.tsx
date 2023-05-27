import React, { FC } from 'react';

import Title from '../../components/section-title';
import AddAnswerForm from '../../components/add-answer-form';
import styles from './index.module.scss';
import { useAppSelector } from '../../store/hooks';

const Task: FC = () => {
  const { description, text } = useAppSelector((state) => state.task);

  return (
    <section className={styles.section}>
      <Title>{description}</Title>
      <div className={styles.content}>
        {/* <p className={styles.subtitle}>Сортировка пузырьком</p> */}
        <p className={styles.description}>{text}</p>
        <p className={styles.grade}>Оценено: 5</p>
        <AddAnswerForm />
      </div>
    </section>
  );
};

export default Task;
