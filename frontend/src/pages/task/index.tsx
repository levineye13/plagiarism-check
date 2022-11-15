import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Title from '../../components/section-title';
import AddAnswerForm from '../../components/add-answer-form';
import styles from './index.module.scss';
import { ROUTES } from '../../utils/constants';

const user = { role: 'teacher' };

const Task: FC = () => {
  const { pathname } = useLocation();

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
        {user.role !== 'student' && (
          <Link to={`${pathname}${ROUTES.groups}`} className={styles.link}>
            Посмотреть ответы
          </Link>
        )}
      </div>
    </section>
  );
};

export default Task;
