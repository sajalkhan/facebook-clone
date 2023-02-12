import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrivacySettings, HelpSupports, DisplayAccessibility } from 'components/molecules/user-menu-options';
import { UserMenuItem } from 'components/atoms/user-menu-item';

interface UserMenuProps {
  first_name: string;
  last_name: string;
  imgUrl?: string;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  first_name,
  last_name,
  imgUrl = process.env.REACT_APP_DEFAULT_IMAGE
}) => {
  const [visible, setVisible] = useState(0);

  return (
    <div className="m-user-menu">
      {visible === 0 && (
        <>
          <Link to="/profile" className="m-user-menu__header">
            <img src={imgUrl} alt="" />
            <div className="m-user-menu__header-col">
              <span>
                {first_name}
                {last_name}
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
            onClick={() => setVisible(1)}
            rightArrow
          />

          <UserMenuItem icon="help_filled_icon" text="Help & support" onClick={() => setVisible(2)} rightArrow />

          <UserMenuItem
            icon="dark_filled_icon"
            text="Display & Accessibility"
            onClick={() => setVisible(3)}
            rightArrow
          />
          <UserMenuItem icon="logout_filled_icon" text="Logout" />
        </>
      )}

      {visible === 1 && <PrivacySettings setVisible={setVisible} />}
      {visible === 2 && <HelpSupports setVisible={setVisible} />}
      {visible === 3 && <DisplayAccessibility setVisible={setVisible} />}
    </div>
  );
};
