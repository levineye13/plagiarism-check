import React, { FC, ReactElement, useEffect } from 'react';

import SectionTitle from '../../section-title';
import AddCourseForm from '../../add-course-form';
import MultiSelect from '../../multi-select';
import Back from '../../back-button';
import styles from './index.module.scss';
import { modalClose, setField } from '../../../store/actions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getAllGroupsOwner } from '../../../store/actions/group';
import { formNames } from '../../../utils/constants';

interface IAddTask {
  readonly onOpenModal: (formId: string, question: string) => void;
}

const CreateCourse: FC<IAddTask> = ({ onOpenModal }): ReactElement => {
  const dispatch = useAppDispatch();
  const { ownGroups } = useAppSelector((state) => state.groups);
  const { groups } = useAppSelector((state) => state.form.addCourse);

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
      <MultiSelect
        className={styles.select}
        style={{ marginBottom: 20 }}
        title="Выберите группы"
        list={ownGroups.map((item) => item.name)}
        selectList={groups.value as string[]}
        onSelect={(newSelect: string[]) =>
          setField({
            form: formNames.addCourse,
            key: 'groups',
            value: newSelect,
          })
        }
      />
      <AddCourseForm
        id="addCourse"
        groups={groups.value as string[]}
        onSubmit={handleSubmit}
        onButtonClick={handleOpenModal}
      />
    </section>
  );
};

export default CreateCourse;
