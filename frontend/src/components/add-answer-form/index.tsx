import React, { FC, useCallback } from 'react';
import Editor from '@monaco-editor/react';

import Button from '../button';
import { LANGUAGE, THEME } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './index.module.scss';
import Select from '../select';
import { setLanguage, setTheme } from '../../store/actions';
import { TLanguage, TTheme } from '../../utils/types';

const AddAnswerForm: FC = () => {
  const { theme, language } = useAppSelector((store) => store.editor);
  const dispatch = useAppDispatch();

  const handleLanguageSelect = useCallback(
    (language: TLanguage): void => {
      dispatch(setLanguage(language));
    },
    [dispatch]
  );

  const handleThemeSelect = useCallback(
    (theme: TTheme): void => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  return (
    <form className={styles.form} name="addAnswerForm">
      <div className={styles.div}>
        <Select<TLanguage>
          title="Язык программирования"
          list={Object.keys(LANGUAGE) as TLanguage[]}
          selected={language}
          onSelect={handleLanguageSelect}
          style={{ marginRight: 20 }}
        />
        <Select<TTheme>
          title="Тема"
          list={Object.keys(THEME) as TTheme[]}
          selected={theme}
          onSelect={handleThemeSelect}
        />
      </div>
      <Editor
        width="100%"
        height="400px"
        language={language}
        value="//Напишите код"
        theme={theme}
      />
      <div className={styles.buttons}>
        <Button type="button" style={{ marginRight: 20 }}>
          Очистить
        </Button>
        <Button type="submit">Отправить</Button>
      </div>
    </form>
  );
};

export default AddAnswerForm;
