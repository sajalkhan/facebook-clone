import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Loading } from './';

export default {
  title: 'components/atoms/Loading',
  component: Loading,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />;

export const Normal = Template.bind({});

export const Overlay = Template.bind({});
Overlay.args = { overlay: true };
