import { Icon } from 'components/atoms/icon';
import { IconType } from 'components/atoms/icon/icon-list';
import { mapModifiers, ModifierProp } from 'libs/component';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type inheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

export interface ButtonProps extends inheritedProps {
  iconName?: IconType;
  children?: React.ReactNode;
  modifiers?: ModifierProp<'primary' | 'secondary' | 'transparent-black'>;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'delete';
  iconPositionRight?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'reset' | 'submit';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  modifiers,
  size,
  href,
  target,
  color,
  type = 'button',
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
            <Icon name={iconName} />
          </span>
        )}
        <span className="a-button__text">{children}</span>
      </a>
    );
  } else {
    return (
      <button type={type} className={className} onClick={onClick} {...props}>
        {iconName && (
          <span className="icon-wrapper">
            <Icon name={iconName} />
          </span>
        )}
        <span className="a-button__text">{children}</span>
      </button>
    );
  }
};

Button.displayName = 'button';
