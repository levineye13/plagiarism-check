import React, { FC } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import 'normalize.css';
import '../../styles/index.scss';
import styles from './index.module.scss';

import Header from '../../components/header';
import Menu from '../../components/menu';
import Login from '../../pages/login';
import Register from '../../pages/register';
import ForgotPassword from '../../pages/forgot-password';
import ResetPassword from '../../pages/reset-password';
import Profile from '../../pages/profile';
import Subjects from '../../pages/subjects';
import Subject from '../../pages/subject';
import Task from '../../pages/task';
import Group from '../../pages/group';
import Groups from '../../pages/groups';
import Answer from '../../pages/answer';
import Protected from '../../hoc/protected-component';
import Modal from '../modal';
import AdminPanel from '../admin';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { modalOpen, modalSetForm, modalSetQuestion } from '../../store/actions';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen } = useAppSelector((state) => state.modal);

  const handleOpenModal = (formId: string, question: string): void => {
    dispatch(modalSetForm(formId));
    dispatch(modalSetQuestion(question));
    dispatch(modalOpen());
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.content}>
        <Menu />
        <Routes>
          <Route
            path={ROUTES.home}
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path={ROUTES.user} element={<Profile />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
          <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
          <Route path={ROUTES.subjects} element={<Subjects />} />
          <Route path={`${ROUTES.subject}`} element={<Subject />} />
          <Route path={`${ROUTES.subject}${ROUTES.task}`} element={<Task />} />
          <Route path={`${ROUTES.group}`} element={<Group />} />
          <Route
            path={`${ROUTES.subject}${ROUTES.task}${ROUTES.groups}`}
            element={<Groups />}
          />
          <Route
            path={`${ROUTES.subject}${ROUTES.task}${ROUTES.group}`}
            element={<Group />}
          />
          <Route
            path={`${ROUTES.subject}${ROUTES.task}${ROUTES.group}${ROUTES.user}`}
            element={<Answer />}
          />
          <Route
            path="admin/*"
            element={<AdminPanel onOpenModal={handleOpenModal} />}
          />
        </Routes>
        {isOpen && <Modal />}
      </main>
    </div>
  );
};

export default App;
