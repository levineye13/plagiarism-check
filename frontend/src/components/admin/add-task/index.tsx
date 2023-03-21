import React, { ReactElement, useCallback, useState } from 'react';

import Input from '../../input';
import Select from '../../select';
import MultiSelect from '../../multi-select';
import Button from '../../button';
import SectionTitle from '../../section-title';
import Back from '../../back-button';
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
      <Back />
      <SectionTitle style={{ flexBasis: '100%', marginBottom: 20 }}>
        Добавление задания
      </SectionTitle>
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
          <Button type="submit">Добавить</Button>
        </form>
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
