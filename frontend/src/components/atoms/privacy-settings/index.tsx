interface ItemProps {
  icon: string;
  text: string;
}

interface PrivacySettingProps {
  setVisible: (value: number) => void;
}

const PrivacySettingItem: React.FC<ItemProps> = ({ icon, text }) => {
  return (
    <div className="a-privacy-settings__item">
      <div className="small_circle">
        <i className={icon}></i>
      </div>
      <span>{text}</span>
    </div>
  );
};

export const PrivacySettings: React.FC<PrivacySettingProps> = ({ setVisible }) => {
  return (
    <div className="a-privacy-settings">
      <div className="a-privacy-settings__header">
        <div className="circle" onClick={() => setVisible(0)}>
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>

      <PrivacySettingItem icon="settings_filled_icon" text="Settings" />
      <PrivacySettingItem icon="privacy_checkup_icon" text="Privacy Checkup" />
      <PrivacySettingItem icon="privacy_shortcuts_icon" text="Privacy Shortcuts" />
      <PrivacySettingItem icon="activity_log_icon" text="Activity log" />
      <PrivacySettingItem icon="news_icon" text="News Feed Preferences" />
      <PrivacySettingItem icon="language_icon" text="Language" />
    </div>
  );
};
