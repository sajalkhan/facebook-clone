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
  height: 52,
  width: 60
};
