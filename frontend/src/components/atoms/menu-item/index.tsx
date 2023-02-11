import React from 'react';
export interface MenuItemType {
  name: string;
  description: string;
  icon: string;
}

export const MenuItem: React.FC<MenuItemType> = ({ name, description, icon }) => {
  return (
    <div className="a-menu_item">
      <img src={require(`assets/menu-items/${icon}.png`)} alt="" />
      <div className="a-menu_item__info">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
