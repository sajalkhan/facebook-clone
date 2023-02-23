import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './';

export default {
  title: 'components/atoms/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook',
  color: 'duskyBlue',
  height: 100,
  width: 100
};

export const LiveVideo = Template.bind({});
LiveVideo.args = {
  name: 'live-video',
  color: 'pinkishRed',
  height: 100,
  width: 100
};

export const Photo = Template.bind({});
Photo.args = {
  name: 'photo',
  color: 'pinkishRed',
  height: 100,
  width: 100
};
