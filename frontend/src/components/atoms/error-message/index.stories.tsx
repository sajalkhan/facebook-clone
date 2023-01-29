import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ErrorMessage } from './';

export default {
  title: 'components/atoms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = args => <ErrorMessage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  error: {
    Message:
      'A timeout error has occurred. Please wait for a while and try again. If the problem persists, please contact the help desk.',
    Code: '98765',
    TranToken: '98c8c065-7397-4b99-86a2-945a0483fe6d',
  },
};

export const Code = Template.bind({});
Code.args = {
  error: {
    Message:
      'A timeout error has occurred. Please wait for a while and try again. If the problem persists, please contact the help desk.',
    Code: '98765',
  },
};
