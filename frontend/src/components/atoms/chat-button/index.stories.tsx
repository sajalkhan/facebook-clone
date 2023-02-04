/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatButton } from './';

export default {
  title: 'components/atoms/ChatButton',
  component: ChatButton,
  parameters: {
    layout: 'padded'
  }
} as ComponentMeta<typeof ChatButton>;

const Template: ComponentStory<typeof ChatButton> = args => <ChatButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
