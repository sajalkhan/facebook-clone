import React, { useRef } from 'react';
import { Return } from 'assets/svg';
import useClickOutside from 'helpers/clickOutside';
import { SearchInput } from 'components/atoms/search-input';

interface SearchMenuProps {
  color: string;
  setShowSearchMenu: (value: boolean) => void;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ color, setShowSearchMenu }) => {
  const searchMenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(searchMenuRef, () => setShowSearchMenu(false));

  return (
    <div className="m-search-menu scrollbar" ref={searchMenuRef}>
      <div className="m-search-menu__wrapper">
        <div className="m-header__logo">
          <div className="m-search-menu__logo-wrapper" onClick={() => setShowSearchMenu(false)}>
            <Return color={color} />
          </div>
        </div>
        <SearchInput placeholder="Search Facebook" />
      </div>

      <div className="m-search-menu__history-header">
        <span>Recent searches</span>
        <span>Edit</span>
      </div>
      <div className="m-search-menu__history"></div>
      <div className="m-search-menu__results scrollbar"></div>
    </div>
  );
};

export default SearchMenu;
