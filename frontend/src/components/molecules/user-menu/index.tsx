import { Link } from 'react-router-dom';
import { PrivacySettings } from 'components/atoms/privacy-settings';
import { useState } from 'react';

interface UserMenuProps {
  first_name: string;
  last_name: string;
  imgUrl?: string;
}

interface UserMenuOptionProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

const UserHeader = ({ first_name, last_name, imgUrl }: UserMenuProps) => (
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
);

const UserMain = () => (
  <div className="m-user-menu__main">
    <div className="small_circle">
      <i className="report_filled_icon"></i>
    </div>
    <div className="m-user-menu__main-col">
      <span>Give feedback</span>
      <span>Help us improve facebook</span>
    </div>
  </div>
);

const UserMenuOption: React.FC<UserMenuOptionProps> = ({ icon, text, onClick }) => (
  <div className="m-user-menu__item" onClick={onClick}>
    <div className="small_circle">
      <i className={`${icon}_filled_icon`} />
    </div>
    <span>{text}</span>
    {onClick && (
      <div className="m-user-menu__item--right-arrow">
        <i className="right_icon" />
      </div>
    )}
  </div>
);

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
          <UserHeader first_name={first_name} last_name={last_name} imgUrl={imgUrl} />
          <div className="divider" />

          <UserMain />

          <div className="divider" />
          <UserMenuOption icon="settings" text="Settings & privacy" onClick={() => setVisible(1)} />
          <UserMenuOption icon="help" text="Help & support" />
          <UserMenuOption icon="dark" text="Display & Accessibility" />
          <UserMenuOption icon="logout" text="Logout" />
        </>
      )}

      {visible === 1 && <PrivacySettings setVisible={setVisible} />}
    </div>
  );
};
