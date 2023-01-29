import { mapModifiers } from 'libs/component';
import React from 'react';

export const Modal: React.FC = ({ children }) => {
  const componentClassName = mapModifiers('o-modal');
  const className = `${componentClassName}`.trim();

  return <div className={className}>{children}</div>;
};
