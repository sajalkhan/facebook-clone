import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuPrivacy } from 'components/molecules/user-menu-privacy';
import { UserMenuHelpSupport } from 'components/molecules/user-menu-help-support';
import { UserMenuDisplayAccessibility } from 'components/molecules/user-menu-display-accessibility';

interface UserMenuProps {
  firstName: string;
  lastName: string;
  imgUrl?: string;
  ref?: React.Ref<HTMLDivElement>;
  handleLogout?: () => void;
}

const MAIN_MENU = 0;
const PRIVACY_MENU = 1;
const HELP_SUPPORT_MENU = 2;
const DISPLAY_ACCESSIBILITY_MENU = 3;
const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

const UserMenu: React.FC<UserMenuProps> = forwardRef(
  ({ firstName, lastName, imgUrl = DEFAULT_IMAGE, handleLogout }, ref) => {
    const [visible, setVisible] = React.useState(MAIN_MENU);

    return (
      <div className="m-user-menu" ref={ref}>
        {visible === MAIN_MENU && (
          <>
            <Link to="/profile" className="m-user-menu__header">
              <img src={imgUrl} alt="" />
              <div className="m-user-menu__header-col">
                <span>
                  {firstName}
                  {lastName}
                </span>
                <span>See your profile</span>
              </div>
            </Link>

            <div className="divider" />

            <div className="m-user-menu__main">
              <div className="small_circle">
                <i className="report_filled_icon"></i>
              </div>
              <div className="m-user-menu__main-col">
                <span>Give feedback</span>
                <span>Help us improve facebook</span>
              </div>
            </div>

            <div className="divider" />

            <UserMenuItem
              icon="settings_filled_icon"
              text="Settings & privacy"
              onClick={() => setVisible(PRIVACY_MENU)}
              rightArrow
            />

            <UserMenuItem
              icon="help_filled_icon"
              text="Help & support"
              onClick={() => setVisible(HELP_SUPPORT_MENU)}
              rightArrow
            />

            <UserMenuItem
              icon="dark_filled_icon"
              text="Display & Accessibility"
              onClick={() => setVisible(DISPLAY_ACCESSIBILITY_MENU)}
              rightArrow
            />
            <UserMenuItem icon="logout_filled_icon" text="Logout" onClick={handleLogout} />
          </>
        )}

        {visible === PRIVACY_MENU && <UserMenuPrivacy setVisible={setVisible} />}
        {visible === HELP_SUPPORT_MENU && <UserMenuHelpSupport setVisible={setVisible} />}
        {visible === DISPLAY_ACCESSIBILITY_MENU && <UserMenuDisplayAccessibility setVisible={setVisible} />}
      </div>
    );
  }
);

export default UserMenu;
UserMenu.displayName = 'userMenu';
