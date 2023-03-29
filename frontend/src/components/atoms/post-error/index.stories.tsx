import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PostError } from './';

export default {
  title: 'components/atoms/PostError',
  component: PostError,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof PostError>;

const Template: ComponentStory<typeof PostError> = args => <PostError {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  error: 'data not found!'
};
