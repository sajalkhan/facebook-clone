import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { InputText } from '.';

export default {
  title: 'components/molecules/InputText',
  component: InputText,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = args => <InputText {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Enter user name'
};
