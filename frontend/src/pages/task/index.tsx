import React, { FC } from 'react';

import Title from '../../components/section-title';
import Button from '../../components/submit';
import styles from './index.module.scss';

const Task: FC = () => {
  return (
    <section className={styles.section}>
      <Title>Лабораторная 1</Title>
      <p className={styles.subtitle}>Сортировка пузырьком</p>
      <p className={styles.description}>
        Вам необходимо реализовать сортировку пузырьком...
      </p>
      <form className={styles.form} name="addAnswerForm">
        <label className={styles.label}>Добавить ответ на задание:</label>
        <code className={styles.code}>
          <span
            className={styles.area}
            role="textbox"
            contentEditable
            placeholder="Добавить ответ на задание"
          ></span>
        </code>
        <Button>Отправить</Button>
      </form>
    </section>
  );
};

export default Task;
