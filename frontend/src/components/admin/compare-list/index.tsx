import React, { FC, useEffect, useRef, useState } from 'react';

import Title from '../../section-title';
import styles from './index.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';
import BackButton from '../../back-button';
import Button from '../../button';

const percents = [
  {
    user1: 'Жаров Олег',
    user2: 'Казанов Александр',
    text_percent: 60,
    struct_percent: 95,
  },
  {
    user1: 'Илья Нечаев',
    user2: 'Жаров Олег',
    text_percent: 60,
    struct_percent: 95,
  },
  {
    user1: 'Казанов Александр',
    user2: 'Илья Нечаев',
    text_percent: 60,
    struct_percent: 95,
  },
  {
    user1: 'Павел Безезуцкий',
    user2: 'Анатолий Токов',
    text_percent: 43,
    struct_percent: 78,
  },
  {
    user1: 'Василий Тихонов',
    user2: 'Мамедов Илья',
    text_percent: 27,
    struct_percent: 45,
  },
  {
    user1: 'Павел Безезуцкий',
    user2: 'Жаров Олег',
    text_percent: 15,
    struct_percent: 24,
  },
];

const CompareList: FC = () => {
  const { taskId, groupId } = useParams();
  const [sorted, setSorted] = useState<typeof percents>(percents);
  // const maxRef = useRef<HTMLInputElement>(null);
  // const minRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const maxValue = maxRef.current!.value;
    // const minValue = minRef.current!.value;

    // const sorted = percents.filter(
    //   (item) => item.percent <= +maxValue && item.percent >= +minValue
    // );

    setSorted(sorted);
  };

  // useEffect(() => {
  //   maxRef.current!.value = '100';
  //   minRef.current!.value = '0';
  // }, []);

  return (
    <section className={styles.section}>
      <BackButton />
      <Title>Сравнения ответов</Title>
      <div className={styles.content}>
        <ul className={styles.list}>
          {sorted.map((item, index) => (
            <li className={styles.item} key={index}>
              <Link
                to={`${ROUTES.admin}${ROUTES.compare}${ROUTES.tasks}/${taskId}${ROUTES.groups}/${groupId}`}
                className={styles.link}
              >
                <div className={styles.div}>
                  <p className={styles.par}>{item.user1}</p>
                  <p className={styles.par}>{item.user2}</p>
                </div>
                <div>
                  <p className={`${styles.par} ${styles.percent}`}>
                    Структурная схожесть:&ensp;{item.struct_percent}&ensp;%
                  </p>
                  <p className={`${styles.par} ${styles.percent}`}>
                    Текстовая схожесть:&ensp;{item.text_percent}&ensp;%
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.title}>Процент схожести</label>
          <label className={styles.label}>Максимум</label>
          <input type="text" className={styles.input} ref={maxRef} />
          <label className={styles.label}>Минимум</label>
          <input type="text" className={styles.input} ref={minRef} />
          <Button type="submit">Применить</Button>
        </form> */}
      </div>
    </section>
  );
};

export default CompareList;
