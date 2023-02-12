import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserMenuItem } from '.';

export default {
  title: 'components/atoms/UserMenuItem',
  component: UserMenuItem,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof UserMenuItem>;

const Template: ComponentStory<typeof UserMenuItem> = args => <UserMenuItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  icon: 'settings_filled_icon',
  text: 'Settings & privacy',
  rightArrow: true
};
