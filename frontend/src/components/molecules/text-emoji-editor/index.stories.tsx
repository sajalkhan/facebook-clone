import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextEmojiEditor } from './';

export default {
  title: 'components/molecules/TextEmojiEditor',
  component: TextEmojiEditor,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof TextEmojiEditor>;

const Template: ComponentStory<typeof TextEmojiEditor> = args => <TextEmojiEditor {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: 'sajal',
  isShowImg: false,
  text: '',
  setText: () => null
};

export const ImagePreview = Template.bind({});
ImagePreview.args = {
  name: 'sajal',
  isShowImg: true,
  text: '',
  setText: () => null
};
