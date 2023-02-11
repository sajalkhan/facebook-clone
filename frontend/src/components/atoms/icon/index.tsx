import { BaseComponentProps, createComponentBase } from 'libs/component-base/index';
import React from 'react';
import { IconType } from './icon-list';

export type IconProps = BaseComponentProps & {
  iconName: IconType;
  mask?: boolean;
};

export const Icon: React.FC<IconProps> = ({ iconName, mask, ...props }) => {
  const componentClassName = 'a-icon';
  const { Container, elementClass } = createComponentBase(componentClassName, 'span');
  const modifiers = {
    [`${iconName}${mask ? '-mask' : ''}`]: !!iconName
  };

  return <Container modifiers={modifiers} className={elementClass('icon-size')} {...props} />;
};
