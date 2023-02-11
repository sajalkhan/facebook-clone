import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuItem } from '.';

export default {
  title: 'components/atoms/MenuItem',
  component: MenuItem,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => <MenuItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: 'Groups',
  icon: 'groups',
  description: 'Connect with people who share your interests.'
};
