import { store } from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangePasswordForm } from '.';

export default {
  title: 'components/molecules/ChangePasswordForm',
  component: ChangePasswordForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof ChangePasswordForm>;

const Template: ComponentStory<typeof ChangePasswordForm> = args => (
  <MemoryRouter>
    <Provider store={store}>
      <ChangePasswordForm {...args} />
    </Provider>
  </MemoryRouter>
);

export const CodeVerification = Template.bind({});
CodeVerification.args = {};
