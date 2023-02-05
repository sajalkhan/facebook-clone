import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '.';

export default {
  title: 'components/atoms/Heading',
  component: Heading,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => <Heading {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン',
  tag: 'h3'
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: 'ボタン'
};
