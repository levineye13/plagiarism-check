import React, { FC } from 'react';

import Title from '../../components/section-title';
import AssessmentForm from '../../components/assessment-form';
import styles from './index.module.scss';

const user = { role: 'teacher' };

const Answer: FC = () => {
  return (
    <section className={styles.section}>
      <Title>Иванов Иван Иванович</Title>
      <p className={styles.subtitle}>Ответ на задание</p>
      <pre className={styles.answer}>
        <code className={styles.code}>
          {`
            function bubbleSortConcept1(arr) {
              for (let j = arr.length - 1; j > 0; j--) {
                for (let i = 0; i < j; i++) {
                  if (arr[i] > arr[i + 1]) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                  }
                }
              }
            }
          `}
        </code>
      </pre>
      {user.role !== 'student' && <AssessmentForm />}
    </section>
  );
};

export default Answer;
