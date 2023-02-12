import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserMenuPrivacy } from './';

export default {
  title: 'components/molecules/UserMenuPrivacy',
  component: UserMenuPrivacy,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof UserMenuPrivacy>;

const Template: ComponentStory<typeof UserMenuPrivacy> = args => <UserMenuPrivacy {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
