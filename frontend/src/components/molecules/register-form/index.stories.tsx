import { RegisterForm } from '.';
import { MemoryRouter } from 'react-router-dom';

import { store } from 'store';
import { Provider } from 'react-redux';
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
    <Provider store={store}>
      <RegisterForm {...args} />
    </Provider>
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
