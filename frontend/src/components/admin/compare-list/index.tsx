import React, { FC } from 'react';

import Title from '../../section-title';
import styles from './index.module.scss';
import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';
import BackButton from '../../back-button';

const percents = [
  { user1: 'Жаров Олег', user2: 'Казанов Александр', percent: 95 },
  { user1: 'Илья Нечаев', user2: 'Жаров Олег', percent: 95 },
  { user1: 'Павел Безезуцкий', user2: 'Анатолий Токов', percent: 80 },
  { user1: 'Василий Тихонов', user2: 'Мамедов Илья', percent: 45 },
  { user1: 'Павел Павлович', user2: 'Дмитрий Рогов', percent: 8 },
];

const CompareList: FC = () => {
  const { taskId, groupId } = useParams();

  return (
    <section className={styles.section}>
      <BackButton />
      <Title>Сравнения ответов</Title>
      <ul className={styles.list}>
        {percents.map((item) => (
          <li className={styles.item}>
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
    </section>
  );
};

export default CompareList;
