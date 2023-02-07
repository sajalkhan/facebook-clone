import { RegisterForm } from '.';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/molecules/RegisterForm',
  component: RegisterForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = args => (
  <MemoryRouter>
    <RegisterForm {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
