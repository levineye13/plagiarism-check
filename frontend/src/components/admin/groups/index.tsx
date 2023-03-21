import React, { FC, ReactElement } from 'react';

import List from '../../group-list';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
import styles from './index.module.scss';

const Groups: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 20 }}>Список групп</SectionTitle>
      <List />
    </section>
  );
};

export default Groups;
