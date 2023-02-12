import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PrivacySettings } from './';

export default {
  title: 'components/atoms/PrivacySettings',
  component: PrivacySettings,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof PrivacySettings>;

const Template: ComponentStory<typeof PrivacySettings> = () => <PrivacySettings />;

export const Normal = Template.bind({});
Normal.args = {};
