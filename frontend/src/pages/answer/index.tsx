import React, { FC } from 'react';

import Title from '../../components/section-title';
import styles from './index.module.scss';

const Answer: FC = () => {
  return (
    <section className={styles.section}>
      <Title style={{ marginBottom: 20 }}>Иванов Иван Иванович</Title>
      <p className={styles.subtitle}>Ответ на задание</p>
      <code className={styles.answer}>
        FOR J=0 TO N-1 STEP 1
          F=0
          MIN=J
        FOR I=J TO N-1-J STEP 1 
      </code>
    </section>
  );
};

export default Answer;
