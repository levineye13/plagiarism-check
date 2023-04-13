import React, { FC, useRef, useState } from 'react';

import Title from '../../section-title';
import styles from './index.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';
import BackButton from '../../back-button';
import Button from '../../button';
import Input from '../../input';

const percents = [
  { user1: 'Жаров Олег', user2: 'Казанов Александр', percent: 95 },
  { user1: 'Илья Нечаев', user2: 'Жаров Олег', percent: 95 },
  { user1: 'Павел Безезуцкий', user2: 'Анатолий Токов', percent: 80 },
  { user1: 'Василий Тихонов', user2: 'Мамедов Илья', percent: 45 },
  { user1: 'Павел Павлович', user2: 'Дмитрий Рогов', percent: 8 },
];

const CompareList: FC = () => {
  const { taskId, groupId } = useParams();
  const [sorted, setSorted] = useState<typeof percents>(percents);
  const maxRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const maxValue = maxRef.current!.value;
    const minValue = minRef.current!.value;

    const sorted = percents.filter(
      (item) => item.percent <= +maxValue && item.percent >= +minValue
    );

    setSorted(sorted);
  };

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
                <p className={`${styles.par} ${styles.percent}`}>
                  Процент схожести:&ensp;{item.percent}&thinsp;%
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.title}>Процент схожести</label>
          <label className={styles.label}>Максимум</label>
          <Input
            type="text"
            placeholder="Максимум"
            value={'100'}
            inputRef={maxRef}
          />
          <label className={styles.label}>Минимум</label>
          <Input
            type="text"
            placeholder="Минимум"
            value={'0'}
            inputRef={minRef}
          />
          <Button type="submit">Применить</Button>
        </form>
      </div>
    </section>
  );
};

export default CompareList;
