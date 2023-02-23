import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreatePost } from './';

export default {
  title: 'components/molecules/CreatePost',
  component: CreatePost,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof CreatePost>;

const Template: ComponentStory<typeof CreatePost> = args => <CreatePost {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  firstName: 'sajal'
};
