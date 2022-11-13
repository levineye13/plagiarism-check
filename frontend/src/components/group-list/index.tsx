import React, { FC } from 'react';

import GroupItem from '../group-item';
import styles from './index.module.scss';

const subject = {
  title: 'Машинное обучение',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
  ],
};

const GroupList: FC = () => {
  return (
    <ul className={styles.groups}>
      {subject.groups.map((group, index) => (
        <li className={styles.item} key={group.id}>
          <GroupItem id={group.id}>{group.title}</GroupItem>
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
