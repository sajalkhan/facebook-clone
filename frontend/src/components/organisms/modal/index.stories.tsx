import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal } from './';

export default {
  title: 'components/organisms/Modal',
  component: Modal,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン',
};
