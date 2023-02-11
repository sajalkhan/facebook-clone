import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AllMenuItem } from './';

export default {
  title: 'components/atoms/AllMenuItem',
  component: AllMenuItem,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof AllMenuItem>;

const Template: ComponentStory<typeof AllMenuItem> = args => <AllMenuItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: 'Find Friends',
  imgName: 'friends',
  description: 'Search for friends or people you may know.'
};
