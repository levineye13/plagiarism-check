import React, { FC, ReactElement } from 'react';

import SectionTitle from '../../section-title';
import AddGroupForm from '../../add-group-form';
import Back from '../../back-button';
import styles from './index.module.scss';

const CreateGroup: FC = (): ReactElement => {
  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 60 }}>Создание группы</SectionTitle>
      <AddGroupForm />
    </section>
  );
};

export default CreateGroup;
