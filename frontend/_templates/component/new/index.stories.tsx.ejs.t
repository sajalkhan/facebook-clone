---
to: src/components/<%= component %>/<%= h.toLowercase(name) %>/index.stories.tsx
---
import React from 'react';
import { ComponentMeta, ComponentStory  } from '@storybook/react';
import { <%= h.toPascalCase(name) %> } from './';

export default {
  title: 'components/<%= component %>/<%= h.toPascalCase(name) %>',
  component: <%= h.toPascalCase(name) %>,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as ComponentMeta<typeof <%= h.toPascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.toPascalCase(name) %>> = args => <<%= h.toPascalCase(name) %> {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン',
};
