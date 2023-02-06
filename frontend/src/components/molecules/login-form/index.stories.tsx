import { LoginForm } from '.';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/molecules/LoginForm',
  component: LoginForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
  <MemoryRouter>
    <LoginForm {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
