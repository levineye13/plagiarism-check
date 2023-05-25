import React, { FC, ReactElement, useCallback, useEffect } from 'react';

import Select from '../../select';
import MultiSelect from '../../multi-select';
import AddTaskForm from '../../add-task-form';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
import { TLanguage } from '../../../utils/types';
import { LANGUAGE, formNames } from '../../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  setLanguage,
  modalClose,
  setField,
  getAllSubjectsOwner,
} from '../../../store/actions';
import styles from './index.module.scss';

// const courses = [{ title: 'Алгоритмы' }, { title: 'Машинное обучение' }];

// const subject = {
//   title: 'Алгоритмы',
//   groups: [
//     { id: 1, title: 'AAA-21-20' },
//     { id: 2, title: 'BBB-22-21' },
//     { id: 3, title: 'CCC-23-22' },
//     { id: 1, title: 'AAA-21-23' },
//     { id: 2, title: 'BBB-22-24' },
//     { id: 3, title: 'CCC-23-25' },
//   ],
// };

interface IAddTask {
  readonly onOpenModal: (formId: string, question: string) => void;
}

const AddTask: FC<IAddTask> = ({ onOpenModal }): ReactElement => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.editor);
  const { owner } = useAppSelector((state) => state.subject);
  const { courses } = useAppSelector((state) => state.form.addTask);

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
  const handleSubmit = (): void => {
    dispatch(modalClose());
  };

  const handleOpenModal = (): void => {
    onOpenModal('addTask', 'Добавить задание?');
  };

  useEffect(() => {
    dispatch(getAllSubjectsOwner());
  }, [dispatch]);

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
        <AddTaskForm
          id="addTask"
          onSubmit={handleSubmit}
          onButtonClick={handleOpenModal}
        />
      </div>
      <MultiSelect
        className={styles.select}
        title="Выберите курсы"
        list={owner.map((item) => item.name)}
        selectList={courses.value as string[]}
        onSelect={(newSelect: string[]) =>
          setField({
            form: formNames.addTask,
            key: 'courses',
            value: newSelect,
          })
        }
      />
    </section>
  );
};

export default AddTask;
