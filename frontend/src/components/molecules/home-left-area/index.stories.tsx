import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { HomeLeftArea } from './';

export default {
  title: 'components/molecules/HomeLeftArea',
  component: HomeLeftArea,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof HomeLeftArea>;

const Template: ComponentStory<typeof HomeLeftArea> = args => (
  <MemoryRouter>
    <HomeLeftArea {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  firstName: 'sajal',
  lastName: 'khan'
};
