import { mapModifiers } from 'libs/component';
import React from 'react';

export interface TextOwnProps<E extends React.ElementType> {
  children?: React.ReactNode;
  size?: 'small' | 'extra-small';
  weight?: 'medium' | 'bold';
  colors?: 'gray' | 'white' | 'red';
  align?: 'left' | 'center' | 'right';
  className?: string;
  as?: E;
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'span'>({
  children,
  size,
  weight,
  colors,
  align = 'left',
  as,
  className: additionalClassName = '',
  ...restProps
}: TextProps<E>) => {
  const componentClassName = mapModifiers(
    'a-text',
    size && `size-${size}`,
    weight && `weight-${weight}`,
    colors && `color-${colors}`,
    align && `align-${align}`
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const Component = as || 'span';
  return (
    <Component {...restProps} className={className}>
      {children}
    </Component>
  );
};
