import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch
} from 'assets/svg';
import SearchMenu from 'components/molecules/search-menu';
import MenuList from 'components/molecules/menu-list';
import useClickOutside from 'helpers/clickOutside';

type HeaderProps = {
  name: string;
  imgUrl?: string;
};

export const Header: React.FC<HeaderProps> = ({
  name,
  imgUrl = 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
}) => {
  const color = '#65676b';
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);
  const [showMenuList, setShowMenuList] = useState(false);

  const menuListRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuListRef, () => setShowMenuList(false));

  return (
    <header className="o-header">
      <div className="o-header__left">
        <Link to="/" className="o-header__logo">
          <Logo />
        </Link>
        <div className="o-header__search" onClick={() => setShowSearchMenu(true)}>
          <Search color={color} />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {showSearchMenu && <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />}

      <div className="o-header__middle">
        <Link to="/" className="o-header__middle-icon o-header__middle-icon--active">
          <HomeActive />
        </Link>
        <Link to="/" className="o-header__middle-icon">
          <Friends color={color} />
        </Link>
        <Link to="/" className="o-header__middle-icon">
          <Watch color={color} />
          <div className="o-header__middle-notification">9+</div>
        </Link>
        <Link to="/" className="o-header__middle-icon">
          <Market color={color} />
        </Link>
        <Link to="/" className="o-header__middle-icon">
          <Gaming color={color} />
        </Link>
      </div>

      <div className="o-header__right">
        <Link to="/profile" className="o-header__right-profile">
          <img src={imgUrl} alt="" />
          <span>{name}</span>
        </Link>

        <div className="o-header__right-icon" onClick={() => setShowMenuList(prev => !prev)}>
          <Menu />
        </div>
        {showMenuList && <MenuList ref={menuListRef} />}

        <div className="o-header__right-icon">
          <Messenger />
        </div>
        <div className="o-header__right-icon">
          <Notifications />
          <div className="o-header__right-notification">5</div>
        </div>
        <div className="o-header__right-icon">
          <ArrowDown color={color} />
        </div>
      </div>
    </header>
  );
};
