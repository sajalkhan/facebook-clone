import { store } from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PasswordResetForm } from './';

export default {
  title: 'components/molecules/PasswordResetForm',
  component: PasswordResetForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof PasswordResetForm>;

const Template: ComponentStory<typeof PasswordResetForm> = args => (
  <MemoryRouter>
    <Provider store={store}>
      <PasswordResetForm {...args} />
    </Provider>
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
