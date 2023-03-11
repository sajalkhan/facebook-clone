import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImagePreview } from './';

export default {
  title: 'components/atoms/ImagePreview',
  component: ImagePreview,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof ImagePreview>;

const Template: ComponentStory<typeof ImagePreview> = args => <ImagePreview {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
