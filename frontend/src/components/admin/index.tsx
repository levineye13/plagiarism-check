import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from './menu';
import Groups from './groups';
import Group from '../../pages/group';
import AddTask from './add-task';
import Tasks from './tasks';
import Task from './task';
import Answers from './answers';
import Answer from './answer';
import CodeCompare from './code-compare';
import CreateGroup from './create-group';
import styles from './index.module.scss';
import { ROUTES } from '../../utils/constants';

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
  const { home, tasks, task, group, groups, answer, compare } = ROUTES;

  return (
    <section className={styles.section}>
      <Routes>
        <Route path={home} element={<Menu />} />
        <Route path={tasks} element={<Tasks />} />
        <Route path={task} element={<Task />} />
        <Route path={groups} element={<Groups />} />
        <Route path={group} element={<Group />} />
        <Route path={`${task}${group}`} element={<Answers />} />
        <Route path={`${task}${group}${answer}`} element={<Answer />} />
        <Route
          path="add-group"
          element={<CreateGroup onOpenModal={onOpenModal} />}
        />
        <Route
          path="add-task"
          element={<AddTask onOpenModal={onOpenModal} />}
        />
        <Route path={`${task}${group}${compare}`} element={<CodeCompare />} />
      </Routes>
    </section>
  );
};

export default AdminPanel;
