import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SideBySide } from './';

export default {
  title: 'components/organisms/SideBySide',
  component: SideBySide,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof SideBySide>;

const Template: ComponentStory<typeof SideBySide> = args => <SideBySide {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  left: <div>Left</div>,
  right: <div>right</div>,
};
