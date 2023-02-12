import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuOptions, MenuProps } from 'components/atoms/user-menu-options';

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

const Option: React.FC<OptionProps> = ({ icon, text, desc }) => {
  return (
    <div className="m-user-menu-display-accessibility">
      <div className="small_circle" style={{ width: '50px' }}>
        <i className={icon}></i>
      </div>
      <div className="m-user-menu-display-accessibility__details">
        <span>{text}</span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

const RadioOption: React.FC<RadioProps> = ({ id, text, name }) => {
  return (
    <label htmlFor={id} className="m-user-menu-display-accessibility__label">
      <span>{text}</span>
      <input type="radio" name={name} id={id} />
    </label>
  );
};

export const UserMenuDisplayAccessibility: React.FC<MenuProps> = ({ setVisible }) => {
  return (
    <UserMenuOptions headerText="Display & Accessibility" setVisible={setVisible}>
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
