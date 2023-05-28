import React, { FC, useCallback, useRef } from 'react';
import Editor, { OnChange } from '@monaco-editor/react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../button';
import { THEME } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './index.module.scss';
import Select from '../select';
import { createAnswer, setTheme } from '../../store/actions';
import { TTheme } from '../../utils/types';

const AddAnswerForm: FC = () => {
  const { theme } = useAppSelector((state) => state.editor);
  const { id, language, description } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const editorRef = useRef('//Напишите код');

  const handleThemeSelect = useCallback(
    (theme: TTheme): void => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  const handleChange: OnChange = (value, ev) => {
    editorRef.current = value as string;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createAnswer({ taskId: id, name: description, code: editorRef.current })
    );
  };

  const handleOpenModal = (): void => {
    navigate('.', { state: { background: location } });
  };

  return (
    <form
      className={styles.form}
      name="addAnswer"
      noValidate
      onSubmit={handleSubmit}
    >
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
        onChange={handleChange}
        width="100%"
        height="400px"
        language={language}
        defaultValue={editorRef.current}
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
