import { Icon } from 'components/atoms/icon';
import { IconType } from 'components/atoms/icon/icon-list';
import { mapModifiers, ModifierProp } from 'libs/component';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type inheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

export interface ButtonProps extends inheritedProps {
  iconName?: IconType;
  children?: React.ReactNode;
  modifiers?: ModifierProp<
    'primary' | 'secondary' | 'third' | 'fourth' | 'red' | 'transparent' | 'transparent-black' | 'text'
  >;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'delete';
  iconPositionRight?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  modifiers,
  size,
  href,
  target,
  color,
  iconName,
  iconPositionRight,
  className: additionalClassName = '',
  children,
  onClick,
  ...props
}) => {
  const componentClassName = mapModifiers('a-button', modifiers, size, color, iconPositionRight ? 'icon-right' : '');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  if (href) {
    return (
      <a href={href} target={target} className={className} onClick={onClick} {...props}>
        {iconName && (
          <span className="icon-wrapper">
            <Icon mask iconName={iconName} />
          </span>
        )}
        <span className="a-button__text">{children}</span>
      </a>
    );
  } else {
    return (
      <button type="button" className={className} onClick={onClick} {...props}>
        {iconName && (
          <span className="icon-wrapper">
            <Icon mask iconName={iconName} />
          </span>
        )}
        <span className="a-button__text">{children}</span>
      </button>
    );
  }
};

Button.displayName = 'button';
