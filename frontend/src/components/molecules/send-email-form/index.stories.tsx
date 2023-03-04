import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SendEmailForm } from './';

export default {
  title: 'components/molecules/SendEmailForm',
  component: SendEmailForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof SendEmailForm>;

const Template: ComponentStory<typeof SendEmailForm> = args => <SendEmailForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
