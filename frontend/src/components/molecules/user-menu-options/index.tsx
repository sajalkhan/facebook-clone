import { UserMenuItem } from 'components/atoms/user-menu-item';

interface OptionsProps {
  setVisible: (value: number) => void;
}

export const PrivacySettings: React.FC<OptionsProps> = ({ setVisible }) => {
  return (
    <div className="a-user-menu-options">
      <div className="a-user-menu-options__header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>

      <UserMenuItem icon="settings_filled_icon" text="Settings" />
      <UserMenuItem icon="privacy_checkup_icon" text="Privacy Checkup" />
      <UserMenuItem icon="privacy_shortcuts_icon" text="Privacy Shortcuts" />
      <UserMenuItem icon="activity_log_icon" text="Activity log" />
      <UserMenuItem icon="news_icon" text="News Feed Preferences" />
      <UserMenuItem icon="language_icon" text="Language" />
    </div>
  );
};

export const HelpSupports: React.FC<OptionsProps> = ({ setVisible }) => {
  return (
    <div className="a-user-menu-options">
      <div className="a-user-menu-options__header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Help & Support
      </div>

      <UserMenuItem icon="help_center_icon" text="Help Center" />
      <UserMenuItem icon="email_icon" text="Support Inbox" />
      <UserMenuItem icon="info_filled_icon" text="Report a Problem" />
    </div>
  );
};

export const DisplayAccessibility: React.FC<OptionsProps> = ({ setVisible }) => {
  return (
    <div className="a-user-menu-options">
      <div className="a-user-menu-options__header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Display & Accessibility
      </div>

      <div className="a-user-menu-options__details">
        <div className="small_circle" style={{ width: '50px' }}>
          <i className="dark_filled_icon"></i>
        </div>
        <div className="a-user-menu-options__details-col">
          <span>Dark Mode</span>
          <span>Adjust the appearance of Facebook to reduce glare and give your eyes a break.</span>
        </div>
      </div>

      <label htmlFor="darkOff" className="hover1">
        <span>Off</span>
        <input type="radio" name="dark" id="darkOff" />
      </label>
      <label htmlFor="darkOn" className="hover1">
        <span>On</span>
        <input type="radio" name="dark" id="darkOn" />
      </label>

      <div className="a-user-menu-options__details">
        <div className="small_circle" style={{ width: '50px' }}>
          <i className="compact_icon"></i>
        </div>
        <div className="a-user-menu-options__details-col">
          <span>Compact mode</span>
          <span> Make your font size smaller so more content can fit on the screen.</span>
        </div>
      </div>

      <label htmlFor="compactOff">
        <span>Off</span>
        <input type="radio" name="compact" id="compactOff" />
      </label>
      <label htmlFor="compactOn">
        <span>On</span>
        <input type="radio" name="compact" id="compactOn" />
      </label>

      <UserMenuItem icon="keyboard_icon" text="Keyboard" rightArrow />
    </div>
  );
};
