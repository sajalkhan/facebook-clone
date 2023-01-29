import { mapModifiers } from 'libs/component';
import React from 'react';

export type navigationProps = {
  children: React.ReactNode;
};

export const Navigation: React.FC<navigationProps> = ({ children }) => {
  const componentClassName = mapModifiers('a-navigation');
  const className = `${componentClassName}`.trim();

  return (
    <nav className={className}>
      <div className="a-navigation__items">{children}</div>
    </nav>
  );
};
