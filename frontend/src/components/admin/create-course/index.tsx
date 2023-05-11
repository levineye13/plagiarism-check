import React, { FC, ReactElement } from 'react';

import SectionTitle from '../../section-title';
import AddCourseForm from '../../add-course-form';
import MultiSelect from '../../multi-select';
import Back from '../../back-button';
import styles from './index.module.scss';
import { modalClose } from '../../../store/actions';
import { useAppDispatch } from '../../../store/hooks';

const courses = [{ title: 'БСАЫ-23-12' }, { title: 'ЛАРО-23-11' }];

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
      <MultiSelect<string>
        className={styles.select}
        style={{ marginBottom: 20 }}
        title="Выберите группы"
        list={courses.map((item) => item.title)}
        onSelect={() => {}}
      />
      <AddCourseForm
        id="addCourse"
        onSubmit={handleSubmit}
        onButtonClick={handleOpenModal}
      />
    </section>
  );
};

export default CreateGroup;
