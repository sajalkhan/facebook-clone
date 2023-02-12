import { UserMenuItem } from 'components/atoms/user-menu-item';

interface MenuProps {
  setVisible: (value: number) => void;
  headerText?: string;
}

interface OptionProps {
  icon: string;
  text: string;
  desc: string;
}

interface RadioProps {
  id: string;
  text: string;
  name: string;
}

const UserMenuOptions: React.FC<MenuProps> = ({ setVisible, children, headerText }) => {
  return (
    <div className="a-user-menu-options">
      <div className="a-user-menu-options__header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        <span>{headerText}</span>
      </div>
      {children}
    </div>
  );
};

const Option: React.FC<OptionProps> = ({ icon, text, desc }) => {
  return (
    <div className="a-user-menu-options__details">
      <div className="small_circle" style={{ width: '50px' }}>
        <i className={icon}></i>
      </div>
      <div className="a-user-menu-options__details-col">
        <span>{text}</span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

const RadioOption: React.FC<RadioProps> = ({ id, text, name }) => {
  return (
    <label htmlFor={id} className="hover1">
      <span>{text}</span>
      <input type="radio" name={name} id={id} />
    </label>
  );
};

export const PrivacySettings: React.FC<MenuProps> = ({ setVisible }) => {
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

export const HelpSupports: React.FC<MenuProps> = ({ setVisible }) => {
  return (
    <UserMenuOptions headerText="Help & Support" setVisible={setVisible}>
      <UserMenuItem icon="help_center_icon" text="Help Center" />
      <UserMenuItem icon="email_icon" text="Support Inbox" />
      <UserMenuItem icon="info_filled_icon" text="Report a Problem" />
    </UserMenuOptions>
  );
};

export const DisplayAccessibility: React.FC<MenuProps> = ({ setVisible }) => {
  return (
    <UserMenuOptions headerText=" Display & Accessibility" setVisible={setVisible}>
      <Option
        icon="dark_filled_icon"
        text="Dark Mode"
        desc="Adjust the appearance of Facebook to reduce glare and give your eyes a break."
      />

      <RadioOption id="darkOff" text="Off" name="dark" />
      <RadioOption id="darkOn" text="On" name="dark" />

      <Option
        icon="compact_icon"
        text="Compact mode"
        desc="Make your font size smaller so more content can fit on the screen."
      />

      <RadioOption id="compactOff" text="Off" name="compact" />
      <RadioOption id="compactOn" text="On" name="compact" />

      <UserMenuItem icon="keyboard_icon" text="Keyboard" rightArrow />
    </UserMenuOptions>
  );
};
