import React from 'react';
import { mapModifiers } from 'libs/component';

interface AllMenuItemProps {
  name: string;
  description: string;
  imgName: string;
}

export const AllMenuItem: React.FC<AllMenuItemProps> = ({ name, description, imgName }) => {
  const componentClassName = mapModifiers('a-all_menu_item');
  const className = `${componentClassName}`.trim();

  return (
    <div className={className}>
      <img src={require(`assets/menu-items/${imgName}.png`)} alt="" />
      <div className="a-all_menu_item__info">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
