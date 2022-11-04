import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../../utils/constants';
import styles from './index.module.scss';
import 'normalize.css';

import Login from '../../pages/login';
import Register from '../../pages/register';

const App = () => {
  return (
    <div className={styles.page}>
      <Routes>
        <Route path={ROUTES.home} element={'APP'} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.register} element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
