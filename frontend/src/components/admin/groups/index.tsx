import React, { FC, ReactElement } from 'react';

import List from '../../group-list';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';

const Groups: FC = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 20 }}>Список групп</SectionTitle>
      <List path={pathname} />
    </section>
  );
};

export default Groups;
