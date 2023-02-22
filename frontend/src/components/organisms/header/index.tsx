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
import UserMenu from 'components/organisms/user-menu';
import SearchMenu from 'components/molecules/search-menu';
import AllMenuList from 'components/molecules/menu-list';
import useClickOutside from 'helpers/clickOutside';

type HeaderProps = {
  firstName: string;
  lastName: string;
  imgUrl?: string;
};

export const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  imgUrl = process.env.REACT_APP_DEFAULT_IMAGE
}) => {
  const color = '#65676b';
  const [showSearchMenu, setShowSearchMenu] = useState<boolean>(false);
  const [showMenuList, setShowMenuList] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const menuListRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuListRef, () => setShowMenuList(false));
  useClickOutside(userMenuRef, () => setShowUserMenu(false));

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
          <span>{firstName}</span>
        </Link>

        <div
          className="o-header__right-icon"
          onClick={() => {
            setShowUserMenu(false);
            setShowMenuList(prev => !prev);
          }}
        >
          <Menu />
        </div>
        {showMenuList && <AllMenuList ref={menuListRef} />}

        <div
          className="o-header__right-icon"
          onClick={() => {
            setShowUserMenu(false);
            setShowMenuList(false);
          }}
        >
          <Messenger />
        </div>

        <div
          className="o-header__right-icon"
          onClick={() => {
            setShowUserMenu(false);
            setShowMenuList(false);
          }}
        >
          <Notifications />
          <div className="o-header__right-notification">5</div>
        </div>

        <div
          className="o-header__right-icon"
          onClick={() => {
            setShowMenuList(false);
            setShowUserMenu(prev => !prev);
          }}
        >
          <ArrowDown color={color} />
        </div>
        {showUserMenu && <UserMenu firstName={firstName} lastName={lastName} ref={userMenuRef} />}
      </div>
    </header>
  );
};
