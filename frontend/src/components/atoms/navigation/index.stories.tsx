import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Navigation } from './';

export default {
  title: 'components/atoms/Navigation',
  component: Navigation,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = args => <Navigation {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <>
      <a href="#">home</a>
      <a href="#">super heros</a>
      <a href="#">rq super heros</a>
    </>,
  ],
};
