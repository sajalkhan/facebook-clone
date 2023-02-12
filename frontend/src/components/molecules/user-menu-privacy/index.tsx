import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuOptions, MenuProps } from 'components/atoms/user-menu-options';

export const UserMenuPrivacy: React.FC<MenuProps> = ({ setVisible }) => {
  return (
    <UserMenuOptions headerText="Settings & Privacy" setVisible={setVisible}>
      <UserMenuItem icon="settings_filled_icon" text="Settings" />
      <UserMenuItem icon="privacy_checkup_icon" text="Privacy Checkup" />
      <UserMenuItem icon="privacy_shortcuts_icon" text="Privacy Shortcuts" />
      <UserMenuItem icon="activity_log_icon" text="Activity log" />
      <UserMenuItem icon="news_icon" text="News Feed Preferences" />
      <UserMenuItem icon="language_icon" text="Language" />
    </UserMenuOptions>
  );
};
