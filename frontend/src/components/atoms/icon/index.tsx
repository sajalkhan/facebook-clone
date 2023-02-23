import React from 'react';
import { IconType, ColorType } from './icon-list';
import { BaseComponentProps, createComponentBase } from 'libs/component-base/index';

export type IconProps = BaseComponentProps & {
  name: IconType;
  color?: ColorType;
  height?: number;
  width?: number;
};

export const Icon: React.FC<IconProps> = ({ name, color, height, width, ...props }) => {
  const { Container } = createComponentBase('span');

  return (
    <Container
      className="a-icon"
      data-icon={name}
      data-color={color}
      style={{ height: `${height}px`, width: `${width}px` }}
      {...props}
    />
  );
};
