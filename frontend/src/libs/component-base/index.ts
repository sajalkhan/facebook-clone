import React, { useCallback } from 'react';

import { addClassName, getElementClass } from 'libs/class-name';

export type ContainerHTMLProps<T extends keyof React.ReactHTML> = JSX.IntrinsicElements[T];

export type BaseComponentProps = {
  id?: string;
  className?: string;
};

export const createComponentBase = <T extends keyof React.ReactHTML>(baseClassName: string, tagName?: T) => {
  const elementClass = useCallback(
    (...elements: string[]) => getElementClass(baseClassName, ...elements),
    [baseClassName]
  );

  const Container = useCallback(
    (props: ContainerHTMLProps<T>) => {
      const { className: propsClassName, children, ...otherProps } = props;

      const className = propsClassName ? addClassName(baseClassName, propsClassName) : baseClassName;

      return React.createElement(
        tagName ?? 'div',
        {
          ...otherProps,
          className
        },
        children
      );
    },
    [baseClassName, tagName]
  );

  return {
    Container,
    elementClass
  };
};
