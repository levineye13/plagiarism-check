import React, { FC, ReactElement, useEffect, useState } from 'react';

import SectionTitle from '../../section-title';
import AddCourseForm from '../../add-course-form';
import MultiSelect from '../../multi-select';
import Back from '../../back-button';
import styles from './index.module.scss';
import { modalClose } from '../../../store/actions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getAllGroupsOwner } from '../../../store/actions/group';

interface IAddTask {
  readonly onOpenModal: (formId: string, question: string) => void;
}

const CreateCourse: FC<IAddTask> = ({ onOpenModal }): ReactElement => {
  const dispatch = useAppDispatch();
  const { ownGroups } = useAppSelector((state) => state.groups);
  const [selectList, setSelectList] = useState<string[]>([]);

  const handleSubmit = (): void => {
    dispatch(modalClose());
  };

  const handleOpenModal = (): void => {
    onOpenModal('addCourse', 'Добавить курс?');
  };

  useEffect(() => {
    dispatch(getAllGroupsOwner());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ marginBottom: 60 }}>Создание курса</SectionTitle>
      <MultiSelect<string>
        className={styles.select}
        style={{ marginBottom: 20 }}
        title="Выберите группы"
        list={ownGroups.map((item) => item.name)}
        selectList={selectList}
        onSelect={setSelectList}
      />
      <AddCourseForm
        id="addCourse"
        groups={selectList}
        onSubmit={handleSubmit}
        onButtonClick={handleOpenModal}
      />
    </section>
  );
};

export default CreateCourse;
