import React, { forwardRef } from 'react';
import { menu, create } from 'constants/all-menu';
import { MenuItem, MenuItemType } from 'components/atoms/menu-item';
import { SearchInput } from 'components/atoms/search-input';

interface MenuGroupType {
  name: string;
  items: MenuItemType[];
}

interface MenuListProps {
  ref?: React.Ref<HTMLDivElement>;
}

const MenuList: React.FC<MenuListProps> = forwardRef((_, ref) => {
  const menuGroups: MenuGroupType[] = [
    { name: 'Social', items: menu.slice(0, 6) },
    { name: 'Entertainment', items: menu.slice(6, 9) },
    { name: 'Shopping', items: menu.slice(9, 11) },
    { name: 'Personal', items: menu.slice(11, 15) },
    { name: 'Professional', items: menu.slice(15, 17) },
    { name: 'Community Resources', items: menu.slice(17, 21) },
    { name: 'More from Meta', items: menu.slice(21, 23) }
  ];

  return (
    <div className="m-menu-list" ref={ref}>
      <div className="m-menu-list__header">Menu</div>
      <div className="m-menu-list__wrapper">
        <div className="m-menu-list__left">
          <SearchInput placeholder="Search Menu" />
          {menuGroups.map((group, i) => (
            <div className="m-menu-list__group" key={i}>
              <div className="m-menu-list__group--header">{group.name}</div>
              {group.items.map((item, j) => (
                <MenuItem name={item.name} description={item.description} icon={item.icon} key={j} />
              ))}
            </div>
          ))}
        </div>

        <div className="m-menu-list__right">
          <div className="m-menu-list__right--header">Create</div>
          {create.map((item, i) => (
            <div className="m-menu-list__right-item" key={i}>
              <div className="m-menu-list__right-item--circle">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MenuList;
MenuList.displayName = 'menuList';
