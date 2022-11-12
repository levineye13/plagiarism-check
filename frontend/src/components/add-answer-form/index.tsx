import React, { FC, useRef } from 'react';

import Button from '../submit';
import styles from './index.module.scss';

const AddAnswerForm: FC = () => {
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const clearArea = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    if (areaRef.current !== null) {
      areaRef.current.value = '';
    }
  };

  return (
    <form className={styles.form} name="addAnswerForm">
      <label className={styles.label}>Добавить ответ на задание:</label>
      <code className={styles.code}>
        <textarea
          className={styles.area}
          placeholder="Вставьте код"
          ref={areaRef}
        />
      </code>
      <Button style={{ marginBottom: 20 }} onClick={clearArea}>
        Очистить
      </Button>
      <Button onClick={() => {}}>Отправить</Button>
    </form>
  );
};

export default AddAnswerForm;
