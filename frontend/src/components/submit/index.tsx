import React from 'react';

import { FCWithChildren } from '../../utils/types';

const Submit: FCWithChildren = ({ children }) => {
  return <button>{children}</button>;
};

export default Submit;
