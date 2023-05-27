import React, { FC, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../button';
import { THEME } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './index.module.scss';
import Select from '../select';
import { setTheme } from '../../store/actions';
import { TTheme } from '../../utils/types';

const AddAnswerForm: FC = () => {
  const { theme } = useAppSelector((state) => state.editor);
  const { language } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleThemeSelect = useCallback(
    (theme: TTheme): void => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  const handleOpenModal = (): void => {
    navigate('.', { state: { background: location } });
  };

  return (
    <form className={styles.form} name="addAnswerForm">
      <div className={styles.div}>
        <Select
          blocked
          title="Язык программирования"
          list={[]}
          selected={language}
          onSelect={() => {}}
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
        <Button
          type="button"
          style={{ marginRight: 20 }}
          onClick={handleOpenModal}
        >
          Очистить
        </Button>
        <Button type="submit">Отправить</Button>
      </div>
    </form>
  );
};

export default AddAnswerForm;
