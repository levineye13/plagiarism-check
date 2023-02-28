import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../store/hooks';
import { ROUTES } from '../utils/constants';

const ProtectedComponent: FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return isAuth ? children : <Navigate to={ROUTES.login} replace />;
};

export default ProtectedComponent;
