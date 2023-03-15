import React, { ReactElement, useCallback, useState } from 'react';

import Input from '../../input';
import Select from '../../select';
import MultiSelect from '../../multi-select';
import { TLanguage } from '../../../utils/types';
import { LANGUAGE } from '../../../utils/constants';
import { useAppDispatch } from '../../../store/hooks';
import { setLanguage } from '../../../store/actions';
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

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Добавление задания</h2>
      <div className={styles.wrapper}>
        <Select<TLanguage>
          title="Язык программирования"
          list={Object.keys(LANGUAGE) as TLanguage[]}
          selected="python"
          onSelect={handleLanguageSelect}
          style={{ marginBottom: 20 }}
        />
        <form className={styles.form} name="addTask">
          <div className={styles.fields}>
            <Input type="text" required placeholder="Введите название работы" />
            <textarea
              className={styles.area}
              required
              placeholder="Введите описание работы"
            />
          </div>
        </form>
      </div>
      <MultiSelect<string>
        title="Группы"
        list={subject.groups.map((item) => item.title)}
        onSelect={() => {}}
      />
    </section>
  );
};

export default AddTask;
