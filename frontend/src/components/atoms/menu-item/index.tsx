import React from 'react';
import { mapModifiers } from 'libs/component';

interface MenuItemProps {
  name: string;
  description: string;
  imgName: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ name, description, imgName }) => {
  const componentClassName = mapModifiers('a-menu_item');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <img src={require(`assets/menu-items/${imgName}.png`)} alt="" />
      <div className="a-menu_item__info">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
