import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SendVerification } from './';

export default {
  title: 'components/atoms/SendVerification',
  component: SendVerification,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof SendVerification>;

const Template: ComponentStory<typeof SendVerification> = args => <SendVerification {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  response: 'resend mail successfully'
};
