import React from 'react';
import { ComponentMeta, ComponentStory  } from '@storybook/react';
import { UserMenuDisplayAccessibility } from './';

export default {
  title: 'components/molecules/UserMenuDisplayAccessibility',
  component: UserMenuDisplayAccessibility,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof UserMenuDisplayAccessibility>;

const Template: ComponentStory<typeof UserMenuDisplayAccessibility> = args => <UserMenuDisplayAccessibility {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン',
};
