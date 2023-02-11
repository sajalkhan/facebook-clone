import React from 'react';
import { mapModifiers } from 'libs/component';

export type Props = {
  /** props description */
  // modifiers?: ('foo' | 'bar')[]
};


export const AllMenuList: React.FC<Props> = (props) => {

  const componentClassName = mapModifiers('m-all-menu-list');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
