import React, { FC, ReactElement } from 'react';

import SectionTitle from '../../section-title';
import AddCourseForm from '../../add-course-form';
import Back from '../../back-button';
import styles from './index.module.scss';
import { modalClose } from '../../../store/actions';
import { useAppDispatch } from '../../../store/hooks';

interface IAddTask {
  readonly onOpenModal: (formId: string, question: string) => void;
}

const CreateGroup: FC<IAddTask> = ({ onOpenModal }): ReactElement => {
  const dispatch = useAppDispatch();

  const handleSubmit = (): void => {
    dispatch(modalClose());
  };

  const handleOpenModal = (): void => {
    onOpenModal('addCourse', 'Добавить курс?');
  };

  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 60 }}>Создание курса</SectionTitle>
      <AddCourseForm
        id="addCourse"
        onSubmit={handleSubmit}
        onButtonClick={handleOpenModal}
      />
    </section>
  );
};

export default CreateGroup;
