import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LeftLink } from './';

export default {
  title: 'components/atoms/LeftLink',
  component: LeftLink,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof LeftLink>;

const Template: ComponentStory<typeof LeftLink> = args => <LeftLink {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: 'emotional',
  text: 'left link',
  notification: '9 new videos'
};
