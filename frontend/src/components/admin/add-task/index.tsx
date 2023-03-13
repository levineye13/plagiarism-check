import React, { ReactElement } from 'react';

import Input from '../../input';
import styles from './index.module.scss';

const subject = {
  title: 'Алгоритмы',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
  ],
};

const AddTask = (): ReactElement => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Добавление задания</h2>
      <form className={styles.form} name="addTask">
        <div className={styles.fields}>
          <Input type="text" required placeholder="Введите название работы" />
          <textarea
            className={styles.area}
            required
            placeholder="Введите описание работы"
          />
        </div>
      </form>
      <ul className={styles.list}>
        {subject.groups.map((group) => (
          <li className={styles.item} key={group.id}>
            {group.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AddTask;
