import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchMenu from './';

export default {
  title: 'components/molecules/SearchMenu',
  component: SearchMenu,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof SearchMenu>;

const Template: ComponentStory<typeof SearchMenu> = args => <SearchMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  color: '#65676b'
};
