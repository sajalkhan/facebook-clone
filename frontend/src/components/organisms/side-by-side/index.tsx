import { mapModifiers } from 'libs/component';
import React from 'react';

export type sidebySideProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const SideBySide: React.FC<sidebySideProps> = ({ left, right }) => {
  const componentClassName = mapModifiers('o-side-by-side');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <div className="o-side-by-side__left">{left}</div>
      <div className="o-side-by-side__right">{right}</div>
    </div>
  );
};
