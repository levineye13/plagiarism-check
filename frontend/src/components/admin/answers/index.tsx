import React, { FC } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import BackButton from '../../back-button';
import SectionTitle from '../../section-title';
import styles from './index.module.scss';
import { ROUTES } from '../../../utils/constants';

const answers = [
  { id: 1, answer: 'answer 1', user: 'Василий Тихонов' },
  { id: 2, answer: 'answer 2', user: 'Жаров Олег' },
  { id: 3, answer: 'answer 3', user: 'Егор Титов' },
];

const Answers: FC = () => {
  const { pathname } = useLocation();
  const { taskId, groupId } = useParams();

  return (
    <section className={styles.section}>
      <BackButton />
      <SectionTitle style={{ marginBottom: 20 }}>Ответы</SectionTitle>
      <ul className={styles.list}>
        {answers.map((answer) => {
          return (
            <li key={answer.id} className={styles.item}>
              <Link
                className={styles.link}
                to={`${pathname}${ROUTES.answers}/${answer.id}`}
              >
                {answer.user}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        to={`${ROUTES.admin}${ROUTES.compareList}${ROUTES.tasks}/${taskId}${ROUTES.groups}/${groupId}`}
        className={styles.compare_link}
      >
        Перейти к сравнениям
      </Link>
    </section>
  );
};

export default Answers;
