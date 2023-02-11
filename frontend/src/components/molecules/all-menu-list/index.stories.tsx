import React from 'react';
import { ComponentMeta, ComponentStory  } from '@storybook/react';
import { AllMenuList } from './';

export default {
  title: 'components/molecules/AllMenuList',
  component: AllMenuList,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof AllMenuList>;

const Template: ComponentStory<typeof AllMenuList> = args => <AllMenuList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン',
};
