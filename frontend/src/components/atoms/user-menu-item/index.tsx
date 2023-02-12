interface UserMenuItemProps {
  icon: string;
  text: string;
  rightArrow?: boolean;
  onClick?: () => void;
}

export const UserMenuItem: React.FC<UserMenuItemProps> = ({ icon, text, rightArrow, onClick }) => (
  <div className="a-user-menu-item" onClick={onClick}>
    <div className="small_circle">
      <i className={icon} />
    </div>
    <span>{text}</span>

    {rightArrow && (
      <div className="a-user-menu-item__right-arrow">
        <i className="right_icon" />
      </div>
    )}
  </div>
);
