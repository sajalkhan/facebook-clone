import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuOptions, MenuProps } from 'components/atoms/user-menu-options';

export const UserMenuHelpSupport: React.FC<MenuProps> = ({ setVisible }) => {
  return (
    <UserMenuOptions headerText="Help & Support" setVisible={setVisible}>
      <UserMenuItem icon="help_center_icon" text="Help Center" />
      <UserMenuItem icon="email_icon" text="Support Inbox" />
      <UserMenuItem icon="info_filled_icon" text="Report a Problem" />
    </UserMenuOptions>
  );
};
