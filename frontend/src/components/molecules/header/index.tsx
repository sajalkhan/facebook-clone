import React from 'react';
import { mapModifiers } from 'libs/component';

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

type HeaderProps = {
  user: Record<string, string>;
};

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const componentClassName = mapModifiers('m-header');
  const className = `${componentClassName}`.trim();

  const color = '#65676b';
  return (
    <header className={className}>
      <div className="m-header__left">
        <Link to="/" className="m-header__logo">
          <Logo />
        </Link>
        <div className="m-header__search">
          <Search color={color} />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="m-header__middle">
        <Link to="/" className="m-header__middle-icon m-header__middle-icon--active">
          <HomeActive />
        </Link>
        <Link to="/" className="m-header__middle-icon">
          <Friends color={color} />
        </Link>
        <Link to="/" className="m-header__middle-icon">
          <Watch color={color} />
          <div className="m-header__middle-notification">9+</div>
        </Link>
        <Link to="/" className="m-header__middle-icon">
          <Market color={color} />
        </Link>
        <Link to="/" className="m-header__middle-icon">
          <Gaming color={color} />
        </Link>
      </div>

      <div className="m-header__right">
        <Link to="/profile" className="m-header__right-profile">
          <img src={user?.picture} alt="" />
          <span>{user?.first_name}</span>
        </Link>
        <div className="m-header__right-icon">
          <Menu />
        </div>
        <div className="m-header__right-icon">
          <Messenger />
        </div>
        <div className="m-header__right-icon">
          <Notifications />
          <div className="m-header__right-notification">5</div>
        </div>
        <div className="m-header__right-icon">
          <ArrowDown color={color} />
        </div>
      </div>
    </header>
  );
};
