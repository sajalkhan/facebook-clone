import React from 'react';
import { stories } from 'constants/home';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stories } from './';

export default {
  title: 'components/molecules/Stories',
  component: Stories,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Stories>;

const Template: ComponentStory<typeof Stories> = args => <Stories {...args} />;
export const Normal = Template.bind({});

Normal.args = {
  userStories: stories
};
