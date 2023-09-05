import React, { FC } from 'react';

import Back from '../../back-button';
import Title from '../../section-title';
import styles from './index.module.scss';
import { useAppSelector } from '../../../store/hooks';
import GroupList from '../../group-list';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';

const Task: FC = () => {
  const { text, description } = useAppSelector((state) => state.task);
  const { pathname } = useLocation();

  return (
    <section className={styles.section}>
      <Back />
      <Title>{description}</Title>
      <p className={styles.description}>{description}</p>
      <p className={styles.text}>{text}</p>
      {/* <GroupList path={`${pathname}/${ROUTES.groups}`} /> */}
    </section>
  );
};

export default Task;
