import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './menu';
import Groups from './groups';
import Group from '../../pages/group';
import AddTask from './add-task';
import CodeCompare from './code-compare';
import CreateGroup from './create-group';
import styles from './index.module.scss';

const subject = {
  title: 'Алгоритмы',
  groups: [
    { id: 1, title: 'AAA-21-20' },
    { id: 2, title: 'BBB-22-21' },
    { id: 3, title: 'CCC-23-22' },
  ],
};

interface IAdminPanel {
  readonly onOpenModal: (formId: string, question: string) => void;
}

const AdminPanel: FC<IAdminPanel> = ({ onOpenModal }) => {
  return (
    <section className={styles.section}>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="groups" element={<Groups />} />
        <Route path="groups/:id" element={<Group />} />
        <Route
          path="add-group"
          element={<CreateGroup onOpenModal={onOpenModal} />}
        />
        <Route
          path="add-task"
          element={<AddTask onOpenModal={onOpenModal} />}
        />
        <Route path="compare" element={<CodeCompare />} />
      </Routes>
    </section>
  );
};

export default AdminPanel;
