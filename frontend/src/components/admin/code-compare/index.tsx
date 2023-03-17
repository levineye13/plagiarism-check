import React, { ReactElement } from 'react';
import Editor from '@monaco-editor/react';

import styles from './index.module.scss';

const code1 = `function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}`;

const code2 = `function bubbleSortConcept2(arr) {
  let swapped;

  do {
    swapped = false;
    console.log(arr);
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        // Save the value to a variable so we don't lose it
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    })
  } while (swapped);
}`;

const CodeCompare = (): ReactElement => {
  return (
    <section className={styles.section}>
      <p className={styles.procent}>
        Процент сходства: <span className={styles.span}>75%</span>
      </p>
      <p className={styles.author}>Павлов Егор</p>
      <Editor
        className={styles.editor}
        language="javasript"
        theme="vs-dark"
        value={code1}
      />
      <p className={styles.info}>Александр Казанов</p>
      <Editor
        className={styles.editor}
        language="javasript"
        theme="vs-dark"
        value={code2}
      />
    </section>
  );
};

export default CodeCompare;
