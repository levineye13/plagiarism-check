import React, { ReactElement, useCallback } from 'react';

import Input from '../../input';
import Select from '../../select';
import MultiSelect from '../../multi-select';
import Button from '../../button';
import AddTaskForm from '../../add-task-form';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
import { TLanguage } from '../../../utils/types';
import { LANGUAGE } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  modalOpen,
  setLanguage,
  modalClose,
  modalSetForm,
  modalSetQuestion,
} from '../../../store/actions';
import styles from './index.module.scss';

const subject = {
  title: 'Алгоритмы',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
    { id: 1, title: 'AAA-21-23' },
    { id: 2, title: 'BBB-22-24' },
    { id: 3, title: 'CCC-23-25' },
  ],
};

const AddTask = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.editor);

  //const [groups, setGroups] = useState<string[]>([]);

  const handleLanguageSelect = useCallback(
    (language: TLanguage): void => {
      dispatch(setLanguage(language));
    },
    [dispatch]
  );

  // const handleGroupSelect = useCallback(
  //   (group: string): void => {
  //     setGroups([...groups, group]);
  //   },
  //   [groups]
  // );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('SUBMIT');

    dispatch(modalClose());
  };

  const handleOpenModal = (): void => {
    dispatch(modalSetForm('addTask'));
    dispatch(modalSetQuestion('Добавить задание?'));
    dispatch(modalOpen());
  };

  return (
    <section className={styles.section}>
      <Back />
      <SectionTitle style={{ flexBasis: '100%', marginBottom: 20 }}>
        Добавление задания
      </SectionTitle>
      <div className={styles.wrapper}>
        <Select<TLanguage>
          title="Язык программирования"
          list={Object.keys(LANGUAGE) as TLanguage[]}
          selected={language}
          onSelect={handleLanguageSelect}
          style={{ marginBottom: 20 }}
        />
        <AddTaskForm onSubmit={handleSubmit} onButtonClick={handleOpenModal} />
      </div>
      <MultiSelect<string>
        className={styles.select}
        title="Выберите группы"
        list={subject.groups.map((item) => item.title)}
        onSelect={() => {}}
      />
    </section>
  );
};

export default AddTask;
