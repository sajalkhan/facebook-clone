import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreatePostModal } from './';

export default {
  title: 'components/molecules/CreatePostModal',
  component: CreatePostModal,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof CreatePostModal>;

const Template: ComponentStory<typeof CreatePostModal> = args => <CreatePostModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  firstName: 'sajal',
  lastName: 'khan'
};
