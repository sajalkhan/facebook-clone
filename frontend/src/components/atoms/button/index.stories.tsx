import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './';

export default {
  title: 'components/atoms/Button',
  component: Button,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'click me',
  modifiers: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'click me',
  modifiers: 'secondary',
  size: 'medium'
};

export const IconAtRightPosition = Template.bind({});
IconAtRightPosition.args = {
  children: '申請書をダウンロード',
  modifiers: 'primary',
  iconName: 'external-blue',
  iconPositionRight: true
};
