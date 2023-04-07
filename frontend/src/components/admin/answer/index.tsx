import React, { FC, useCallback } from 'react';
import Editor from '@monaco-editor/react';

import Select from '../../select';
import Title from '../../../components/section-title';
import AssessmentForm from '../../assessment-form';
import styles from './index.module.scss';
import { setLanguage, setTheme } from '../../../store/actions';
import { TLanguage, TTheme } from '../../../utils/types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { THEME } from '../../../utils/constants';
import BackButton from '../../back-button';

const Answer: FC = () => {
  const { theme, language } = useAppSelector((store) => store.editor);
  const dispatch = useAppDispatch();

  const handleThemeSelect = useCallback(
    (theme: TTheme): void => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  return (
    <section className={styles.section}>
      <BackButton />
      <Title style={{ marginBottom: 20 }}>Лабораторная 1</Title>
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
        value="FOR J=0 TO N-1 STEP 1
                  F=0
                  MIN=J
                  FOR I=J TO N-1-J STEP 1 
                    IF Y[I]>Y[I+1] THEN SWAP Y[I],Y[I+1]:F=1
                    IF Y[I]<Y[MIN] THEN MIN=I
                  NEXT I
                  IF F=0 THEN EXIT FOR
                  IF MIN<>J THEN SWAP Y[J],Y[MIN]
                NEXT J"
        theme={theme}
        options={{ readOnly: true }}
      />
      <AssessmentForm style={{ marginTop: 20 }} />
    </section>
  );
};

export default Answer;
