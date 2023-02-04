import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ListItems } from '.';

export default {
  title: 'components/molecules/ListItems',
  component: ListItems,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof ListItems>;

const Template: ComponentStory<typeof ListItems> = args => (
  <MemoryRouter>
    <ListItems {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {
      id: '1',
      name: 'test data 1'
    },
    {
      id: '2',
      name: 'test data 2'
    },
    {
      id: '3',
      name: 'test data 3'
    },
    {
      id: '4',
      name: 'test data 4'
    }
  ]
};
