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
import CompareList from './compare-list';
import CodeCompare from './code-compare';
import CreateGroup from './create-group';
import CreateCourse from './create-course';
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
  const { home, tasks, task, group, groups, answer, compare, compareList } =
    ROUTES;

  return (
    <section className={styles.section}>
      <Routes>
        <Route path={home} element={<Menu />} />
        <Route path={tasks} element={<Tasks />} />
        <Route path={task} element={<Task />} />
        <Route path={`${compareList}${tasks}`} element={<Tasks />} />
        <Route path={`${compareList}${task}`} element={<Task />} />
        <Route path={groups} element={<Groups />} />
        <Route path={group} element={<Group />} />
        <Route path={`${task}${group}`} element={<Answers />} />
        <Route path={`${task}${group}${answer}`} element={<Answer />} />
        <Route
          path={`${compareList}${task}${group}`}
          element={<CompareList />}
        />
        <Route path={`${compare}${task}${group}`} element={<CodeCompare />} />
        <Route
          path="add-group"
          element={<CreateGroup onOpenModal={onOpenModal} />}
        />
        <Route
          path="add-course"
          element={<CreateCourse onOpenModal={onOpenModal} />}
        />
        <Route
          path="add-task"
          element={<AddTask onOpenModal={onOpenModal} />}
        />
      </Routes>
    </section>
  );
};

export default AdminPanel;
