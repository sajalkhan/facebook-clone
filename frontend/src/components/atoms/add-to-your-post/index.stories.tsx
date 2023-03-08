import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddToYourPost } from './';

export default {
  title: 'components/atoms/AddToYourPost',
  component: AddToYourPost,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof AddToYourPost>;

const Template: ComponentStory<typeof AddToYourPost> = () => <AddToYourPost />;

export const Normal = Template.bind({});
Normal.args = {};
