---
to: src/components/<%= component %>/<%= h.toLowercase(name) %>/index.tsx
---
import React from 'react';
import { mapModifiers } from 'libs/component';

export type Props = {
  /** props description */
  // modifiers?: ('foo' | 'bar')[]
};


export const <%= h.toPascalCase(name) %>: React.FC<Props> = (props) => {

  const componentClassName = mapModifiers('<%= h.createBaseClassName(component, name) %>');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
