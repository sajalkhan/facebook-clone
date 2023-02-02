import { Icon } from 'components/atoms/icon';
import { addClassName } from 'libs/class-name';
import { BaseComponentProps, createComponentBase } from 'libs/component-base';
import React from 'react';

export type ChatButtonProps = BaseComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ChatButton: React.FC<ChatButtonProps> = ({ target, href, ...props }) => {
  const componentClassName = 'a-chat-button';
  const { Container, elementClass } = createComponentBase(componentClassName, 'a');

  return (
    <Container href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} {...props}>
      <div className={elementClass('text')}>
        <span className="hp_onlyPc">AIチャットで</span>質問する
        <div className={elementClass('icon')}>
          <Icon className={addClassName(elementClass('icon-pc'), 'hp_onlyPc')} iconName="speech-bubble" />
          <Icon className={addClassName(elementClass('icon-sp'), 'hp_onlySp')} iconName="speech-bubble" />
        </div>
      </div>
    </Container>
  );
};
