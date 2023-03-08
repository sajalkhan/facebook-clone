import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EmojiPicker } from './';

export default {
  title: 'components/atoms/EmojiPicker',
  component: EmojiPicker,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof EmojiPicker>;

const Template: ComponentStory<typeof EmojiPicker> = args => <EmojiPicker {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
