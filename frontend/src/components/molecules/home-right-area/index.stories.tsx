import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomeRightArea } from './';

export default {
  title: 'components/molecules/HomeRightArea',
  component: HomeRightArea,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof HomeRightArea>;

const Template: ComponentStory<typeof HomeRightArea> = args => <HomeRightArea {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  firstName: 'sajal',
  lastName: 'khan'
};
