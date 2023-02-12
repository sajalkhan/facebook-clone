export interface MenuProps {
  setVisible: (value: number) => void;
  headerText?: string;
}

export const UserMenuOptions: React.FC<MenuProps> = ({ setVisible, children, headerText }) => {
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
