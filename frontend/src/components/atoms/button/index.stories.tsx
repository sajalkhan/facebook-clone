import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './';

export default {
  title: 'components/atoms/Button',
  component: Button,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'click me',
  modifiers: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'click me',
  modifiers: 'secondary',
};

export const Third = Template.bind({});
Third.args = {
  children: 'click me',
  modifiers: 'third',
};

export const Fourth = Template.bind({});
Fourth.args = {
  children: 'click me',
  modifiers: 'fourth',
};

export const Red = Template.bind({});
Red.args = {
  children: 'click me',
  modifiers: 'red',
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: 'click me',
  modifiers: 'transparent',
};

export const TransparentBlack = Template.bind({});
TransparentBlack.args = {
  children: 'click me',
  modifiers: 'transparent-black',
};

export const Text = Template.bind({});
Text.args = {
  children: 'click me',
  modifiers: 'text',
};
