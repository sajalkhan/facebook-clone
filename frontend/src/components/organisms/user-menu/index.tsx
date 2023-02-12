import React from 'react';
import { Link } from 'react-router-dom';
import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuPrivacy } from 'components/molecules/user-menu-privacy';
import { UserMenuHelpSupport } from 'components/molecules/user-menu-help-support';
import { UserMenuDisplayAccessibility } from 'components/molecules/user-menu-display-accessibility';

interface UserMenuProps {
  first_name: string;
  last_name: string;
  imgUrl?: string;
}

const MAIN_PAGE = 0;
const PRIVACY_PAGE = 1;
const HELP_SUPPORT_PAGE = 2;
const DISPLAY_ACCESSIBILITY_PAGE = 3;
const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const UserMenu: React.FC<UserMenuProps> = ({ first_name, last_name, imgUrl = DEFAULT_IMAGE }) => {
  const [visible, setVisible] = React.useState(MAIN_PAGE);

  return (
    <div className="o-user-menu">
      {visible === MAIN_PAGE && (
        <>
          <Link to="/profile" className="o-user-menu__header">
            <img src={imgUrl} alt="" />
            <div className="o-user-menu__header-col">
              <span>
                {first_name}
                {last_name}
              </span>
              <span>See your profile</span>
            </div>
          </Link>

          <div className="divider" />

          <div className="o-user-menu__main">
            <div className="small_circle">
              <i className="report_filled_icon"></i>
            </div>
            <div className="o-user-menu__main-col">
              <span>Give feedback</span>
              <span>Help us improve facebook</span>
            </div>
          </div>

          <div className="divider" />

          <UserMenuItem
            icon="settings_filled_icon"
            text="Settings & privacy"
            onClick={() => setVisible(PRIVACY_PAGE)}
            rightArrow
          />

          <UserMenuItem
            icon="help_filled_icon"
            text="Help & support"
            onClick={() => setVisible(HELP_SUPPORT_PAGE)}
            rightArrow
          />

          <UserMenuItem
            icon="dark_filled_icon"
            text="Display & Accessibility"
            onClick={() => setVisible(DISPLAY_ACCESSIBILITY_PAGE)}
            rightArrow
          />
          <UserMenuItem icon="logout_filled_icon" text="Logout" />
        </>
      )}

      {visible === PRIVACY_PAGE && <UserMenuPrivacy setVisible={setVisible} />}
      {visible === HELP_SUPPORT_PAGE && <UserMenuHelpSupport setVisible={setVisible} />}
      {visible === DISPLAY_ACCESSIBILITY_PAGE && <UserMenuDisplayAccessibility setVisible={setVisible} />}
    </div>
  );
};
