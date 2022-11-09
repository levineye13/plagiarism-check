import React, { FC } from 'react';

import GroupItem from '../group-item';
import styles from './index.module.scss';

const subject = {
  title: 'Машинное обучение',
  groups: ['AAA-21-20', 'BBB-22-21', 'CCC-23-22'],
};

const GroupList: FC = () => {
  return (
    <ul className={styles.groups}>
      {subject.groups.map((group, index) => (
        <li className={styles.item} key={index}>
          <GroupItem>{group}</GroupItem>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
