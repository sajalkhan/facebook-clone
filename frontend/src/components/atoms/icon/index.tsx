import { mapModifiers } from 'libs/component';
import { BaseComponentProps, createComponentBase } from 'libs/component-base/index';
import React from 'react';
import { IconType } from './icon-list';

export type IconProps = BaseComponentProps & {
  iconName: IconType;
  mask?: boolean;
};

export const Icon: React.FC<IconProps> = ({ iconName, mask, ...props }) => {
  const componentClassName = mapModifiers('a-icon', iconName, mask ? `${iconName}-mask` : '');
  const { Container, elementClass } = createComponentBase(componentClassName, 'span');

  return <Container className={elementClass('icon-size')} {...props} />;
};
